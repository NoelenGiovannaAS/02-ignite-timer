import { zodResolver } from "@hookform/resolvers/zod";
import { HandPalm, Play } from "phosphor-react";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import zod from "zod";
import { CyclesContext } from "../../contexts/CycleContexts";
import { Countdown } from "./Countdown";
import { NewCycleForm } from "./NewCycleForm";
import * as Styles from "./styles";

//schema pois usam schema base (definir um formato e validar os formatos com base nesse schema (formato))

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod.number().min(1).max(60),
});

type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export const Home = () => {
  const { createNewCycle, interruptCurrentCycle, activeCycle } =
    useContext(CyclesContext);

  const newCycleForm = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const { watch, handleSubmit, reset } = newCycleForm;

  function handleCreateNewCycle(data: newCycleFormData) {
    createNewCycle(data);
    reset();
  }

  const task = watch("task");
  const isSubmitDisabled = !task;

  return (
    <Styles.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {activeCycle ? (
          <Styles.StopButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} /> Interromper
          </Styles.StopButton>
        ) : (
          <Styles.StartButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} /> Começar
          </Styles.StartButton>
        )}
      </form>
    </Styles.HomeContainer>
  );
};
export { CyclesContext };

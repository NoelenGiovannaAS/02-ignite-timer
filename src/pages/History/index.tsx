import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useContext } from "react";
import { ICycle } from "../../reducers/cycles/reducer";
import { CyclesContext } from "../Home";
import * as Styles from "./styles";
export const History = () => {
  const { cycles } = useContext(CyclesContext);

  return (
    <Styles.HistoryContainer>
      <h1>Meu histórico</h1>

      <Styles.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((cycle: ICycle) => {
              return (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(cycle.startDate), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  <td>
                    {cycle.finishedDate && (
                      <Styles.Status statusColor="green">
                        Em andamento
                      </Styles.Status>
                    )}

                    {cycle.interruptedDate && (
                      <Styles.Status statusColor="red">
                        Interrompido
                      </Styles.Status>
                    )}

                    {!cycle.finishedDate && !cycle.interruptedDate && (
                      <Styles.Status statusColor="yellow">
                        Em andamento
                      </Styles.Status>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Styles.HistoryList>
    </Styles.HistoryContainer>
  );
};

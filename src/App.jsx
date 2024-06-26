import "./App.css";
import { Button } from "primereact/button";

function App() {
  return (
    <>
      <div className="container">
        <div className="grid">
          <div className="col-fixed bg-black sidebar-width sidebar-height">
            <div className="text-center p-3 font-bold">
              <div className="margin-bottom-logo">
                <h1 className="color-white logo">eEscola</h1>
              </div>

              <div>
                <div className="margin-bottom">
                  <Button
                    label="Boletim"
                    className="button-width button-primary-black"
                  />
                </div>

                <div className="margin-bottom">
                  <Button
                    label="Aluno"
                    className="button-width button-primary-black"
                  />
                </div>

                <div className="margin-bottom">
                  <Button
                    label="Professor"
                    className="button-width button-primary-black"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="text-center p-3 font-bold"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

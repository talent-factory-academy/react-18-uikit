import { Col } from '../../../shared/widgets/layout/Col';
import { Fx } from "../../../shared/widgets/layout/Fx";
import { Separator } from '../../../shared/widgets/layout/Separator';

export const LayoutDemo = () => {
  return <div>

    <h1>LayoutDemo</h1>


    <Fx>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
    </Fx>

    <Separator />

    <Fx justify="justify-between" gap={10}>
      <Col>1</Col>
      <Col className="text-center">2 <br/> Multiple Lines</Col>
      <Col>3</Col>
    </Fx>

    <Separator />
    <Fx justify="justify-end" gap={10}>
      <Col>1</Col>
      <Col>2</Col>
      <Col>3</Col>
    </Fx>

    <Separator />
    <Fx justify="justify-between" gap={10}>
      <Col className="box text-center">1</Col>
      <Col className="box text-center">2</Col>
      <Col className="box text-center">3</Col>
    </Fx>

    <Separator />

    <Fx justify="justify-between" gap={10}>
      <Col grow className="box text-center">1</Col>
      <Col grow  className="box text-center">2 <br /> mulitple</Col>
      <Col grow  className="box text-center">3</Col>
    </Fx>

    <Separator />

    <Fx justify="justify-between" gap={10} valign="items-stretch">
      <Col grow className="box text-center">1</Col>
      <Col grow  className="box text-center">2 <br /> mulitple</Col>
      <Col grow  className="box text-center">3</Col>
    </Fx>


  </div>
};

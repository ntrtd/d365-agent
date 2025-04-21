/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailFormLayoutsApi } from './RetailFormLayoutsApi';
import { RetailPrintBehaviourBase } from './RetailPrintBehaviourBase';
import { NoYes } from './NoYes';
import { RetailReceipt } from './RetailReceipt';
import { RetailEmailBehaviorBase } from './RetailEmailBehaviorBase';

/**
 * This class represents the entity "RetailFormLayouts" of service "d365_metadata".
 */
export class RetailFormLayouts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailFormLayoutsType<T>
{
  /**
   * Technical entity name for RetailFormLayouts.
   */
  static override _entityName = 'RetailFormLayouts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailFormLayouts entity.
   */
  static _keys = ['FormLayoutId'];
  /**
   * Form Layout Id.
   */
  declare formLayoutId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Print Behaviour.
   * @nullable
   */
  declare printBehaviour?: RetailPrintBehaviourBase | null;
  /**
   * Title.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lines Xml.
   * @nullable
   */
  declare linesXml?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prompt Question.
   * @nullable
   */
  declare promptQuestion?: NoYes | null;
  /**
   * Layout Type.
   * @nullable
   */
  declare layoutType?: RetailReceipt | null;
  /**
   * Footer Xml.
   * @nullable
   */
  declare footerXml?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Upper Case.
   * @nullable
   */
  declare upperCase?: NoYes | null;
  /**
   * Email Behavior.
   * @nullable
   */
  declare emailBehavior?: RetailEmailBehaviorBase | null;
  /**
   * Print As Slip.
   * @nullable
   */
  declare printAsSlip?: NoYes | null;
  /**
   * Header Xml.
   * @nullable
   */
  declare headerXml?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailFormLayoutsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailFormLayoutsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  formLayoutId: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  printBehaviour?: RetailPrintBehaviourBase | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  linesXml?: DeserializedType<T, 'Edm.String'> | null;
  promptQuestion?: NoYes | null;
  layoutType?: RetailReceipt | null;
  footerXml?: DeserializedType<T, 'Edm.String'> | null;
  upperCase?: NoYes | null;
  emailBehavior?: RetailEmailBehaviorBase | null;
  printAsSlip?: NoYes | null;
  headerXml?: DeserializedType<T, 'Edm.String'> | null;
}

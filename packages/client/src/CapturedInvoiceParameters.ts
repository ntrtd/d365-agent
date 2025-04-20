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
import type { CapturedInvoiceParametersApi } from './CapturedInvoiceParametersApi';
import { CapturedInvoiceTargetInvoiceType } from './CapturedInvoiceTargetInvoiceType';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CapturedInvoiceParameters" of service "d365_metadata".
 */
export class CapturedInvoiceParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CapturedInvoiceParametersType<T>
{
  /**
   * Technical entity name for CapturedInvoiceParameters.
   */
  static override _entityName = 'CapturedInvoiceParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CapturedInvoiceParameters entity.
   */
  static _keys = ['Key'];
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cost Invoice Target Invoice Type.
   * @nullable
   */
  declare costInvoiceTargetInvoiceType?: CapturedInvoiceTargetInvoiceType | null;
  /**
   * Header Only Target Invoice Type.
   * @nullable
   */
  declare headerOnlyTargetInvoiceType?: CapturedInvoiceTargetInvoiceType | null;
  /**
   * Transfer Attachment.
   * @nullable
   */
  declare transferAttachment?: NoYes | null;
  /**
   * Po Invoice Target Invoice Type.
   * @nullable
   */
  declare poInvoiceTargetInvoiceType?: CapturedInvoiceTargetInvoiceType | null;

  constructor(_entityApi: CapturedInvoiceParametersApi<T>) {
    super(_entityApi);
  }
}

export interface CapturedInvoiceParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  key: DeserializedType<T, 'Edm.Int32'>;
  costInvoiceTargetInvoiceType?: CapturedInvoiceTargetInvoiceType | null;
  headerOnlyTargetInvoiceType?: CapturedInvoiceTargetInvoiceType | null;
  transferAttachment?: NoYes | null;
  poInvoiceTargetInvoiceType?: CapturedInvoiceTargetInvoiceType | null;
}

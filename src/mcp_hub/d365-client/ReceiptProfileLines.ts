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
import type { ReceiptProfileLinesApi } from './ReceiptProfileLinesApi';
import { RetailReceipt } from './RetailReceipt';

/**
 * This class represents the entity "ReceiptProfileLines" of service "d365_metadata".
 */
export class ReceiptProfileLines<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReceiptProfileLinesType<T>
{
  /**
   * Technical entity name for ReceiptProfileLines.
   */
  static override _entityName = 'ReceiptProfileLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReceiptProfileLines entity.
   */
  static _keys = ['ProfileId', 'ReceiptType'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Receipt Type.
   * @nullable
   */
  declare receiptType?: RetailReceipt | null;
  /**
   * Form Layout Id.
   * @nullable
   */
  declare formLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email Template Id.
   * @nullable
   */
  declare emailTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Receipt Profile 1 Profile Id.
   * @nullable
   */
  declare retailReceiptProfile1ProfileId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Retail Form Layout 1 Form Layout Id.
   * @nullable
   */
  declare retailFormLayout1FormLayoutId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Retail Form Layout 1 Layout Type.
   * @nullable
   */
  declare retailFormLayout1LayoutType?: RetailReceipt | null;

  constructor(_entityApi: ReceiptProfileLinesApi<T>) {
    super(_entityApi);
  }
}

export interface ReceiptProfileLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  receiptType?: RetailReceipt | null;
  formLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  emailTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  retailReceiptProfile1ProfileId?: DeserializedType<T, 'Edm.String'> | null;
  retailFormLayout1FormLayoutId?: DeserializedType<T, 'Edm.String'> | null;
  retailFormLayout1LayoutType?: RetailReceipt | null;
}

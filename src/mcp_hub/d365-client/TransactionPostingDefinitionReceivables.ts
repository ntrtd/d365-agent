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
import type { TransactionPostingDefinitionReceivablesApi } from './TransactionPostingDefinitionReceivablesApi';
import { BillingCodeBillingClassAll } from './BillingCodeBillingClassAll';
import { CustomerTransactionType } from './CustomerTransactionType';

/**
 * This class represents the entity "TransactionPostingDefinitionReceivables" of service "d365_metadata".
 */
export class TransactionPostingDefinitionReceivables<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TransactionPostingDefinitionReceivablesType<T>
{
  /**
   * Technical entity name for TransactionPostingDefinitionReceivables.
   */
  static override _entityName = 'TransactionPostingDefinitionReceivables';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TransactionPostingDefinitionReceivables entity.
   */
  static _keys = [
    'dataAreaId',
    'AttributeTypeBillingClassificationBillingCodeAll',
    'CustomerTransactionType',
    'BillingClassification',
    'BillingCode'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Attribute Type Billing Classification Billing Code All.
   * @nullable
   */
  declare attributeTypeBillingClassificationBillingCodeAll?: BillingCodeBillingClassAll | null;
  /**
   * Customer Transaction Type.
   * @nullable
   */
  declare customerTransactionType?: CustomerTransactionType | null;
  /**
   * Billing Classification.
   */
  declare billingClassification: DeserializedType<T, 'Edm.String'>;
  /**
   * Billing Code.
   */
  declare billingCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Posting Definition.
   * @nullable
   */
  declare postingDefinition?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: TransactionPostingDefinitionReceivablesApi<T>) {
    super(_entityApi);
  }
}

export interface TransactionPostingDefinitionReceivablesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  attributeTypeBillingClassificationBillingCodeAll?: BillingCodeBillingClassAll | null;
  customerTransactionType?: CustomerTransactionType | null;
  billingClassification: DeserializedType<T, 'Edm.String'>;
  billingCode: DeserializedType<T, 'Edm.String'>;
  postingDefinition?: DeserializedType<T, 'Edm.String'> | null;
}

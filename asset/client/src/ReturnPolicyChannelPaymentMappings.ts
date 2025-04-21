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
import type { ReturnPolicyChannelPaymentMappingsApi } from './ReturnPolicyChannelPaymentMappingsApi';

/**
 * This class represents the entity "ReturnPolicyChannelPaymentMappings" of service "d365_metadata".
 */
export class ReturnPolicyChannelPaymentMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ReturnPolicyChannelPaymentMappingsType<T>
{
  /**
   * Technical entity name for ReturnPolicyChannelPaymentMappings.
   */
  static override _entityName = 'ReturnPolicyChannelPaymentMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ReturnPolicyChannelPaymentMappings entity.
   */
  static _keys = [
    'dataAreaId',
    'RetailReturnPolicyChannel_PolicyName',
    'OriginalTenderTypeId',
    'LineNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Retail Return Policy Channel Policy Name.
   */
  declare retailReturnPolicyChannelPolicyName: DeserializedType<
    T,
    'Edm.String'
  >;
  /**
   * Original Tender Type Id.
   */
  declare originalTenderTypeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allowed Return Tender Type Id.
   * @nullable
   */
  declare allowedReturnTenderTypeId?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ReturnPolicyChannelPaymentMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface ReturnPolicyChannelPaymentMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  retailReturnPolicyChannelPolicyName: DeserializedType<T, 'Edm.String'>;
  originalTenderTypeId: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  allowedReturnTenderTypeId?: DeserializedType<T, 'Edm.String'> | null;
}

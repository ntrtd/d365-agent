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
import type { ClientelingParametersApi } from './ClientelingParametersApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "ClientelingParameters" of service "d365_metadata".
 */
export class ClientelingParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ClientelingParametersType<T>
{
  /**
   * Technical entity name for ClientelingParameters.
   */
  static override _entityName = 'ClientelingParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ClientelingParameters entity.
   */
  static _keys = ['dataAreaId', 'Key'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Key.
   */
  declare key: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Customer Insights Application Id.
   * @nullable
   */
  declare customerInsightsApplicationId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Insights Enable Integration.
   * @nullable
   */
  declare customerInsightsEnableIntegration?: NoYes | null;
  /**
   * Customer Insights Instance Id.
   * @nullable
   */
  declare customerInsightsInstanceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Insights Authority Uri.
   * @nullable
   */
  declare customerInsightsAuthorityUri?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Insights Alternative Customer Id Field Name.
   * @nullable
   */
  declare customerInsightsAlternativeCustomerIdFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Insights Customer Attribute 3.
   * @nullable
   */
  declare customerInsightsCustomerAttribute3?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Insights Customer Attribute 1.
   * @nullable
   */
  declare customerInsightsCustomerAttribute1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Insights Customer Attribute 2.
   * @nullable
   */
  declare customerInsightsCustomerAttribute2?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Insights Application Secret Name.
   * @nullable
   */
  declare customerInsightsApplicationSecretName?: DeserializedType<
    T,
    'Edm.String'
  > | null;

  constructor(_entityApi: ClientelingParametersApi<T>) {
    super(_entityApi);
  }
}

export interface ClientelingParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  key: DeserializedType<T, 'Edm.Int32'>;
  customerInsightsApplicationId?: DeserializedType<T, 'Edm.String'> | null;
  customerInsightsEnableIntegration?: NoYes | null;
  customerInsightsInstanceId?: DeserializedType<T, 'Edm.String'> | null;
  customerInsightsAuthorityUri?: DeserializedType<T, 'Edm.String'> | null;
  customerInsightsAlternativeCustomerIdFieldName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  customerInsightsCustomerAttribute3?: DeserializedType<T, 'Edm.String'> | null;
  customerInsightsCustomerAttribute1?: DeserializedType<T, 'Edm.String'> | null;
  customerInsightsCustomerAttribute2?: DeserializedType<T, 'Edm.String'> | null;
  customerInsightsApplicationSecretName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
}

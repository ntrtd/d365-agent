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
import type { PayIntV1PositionDefaultDimensionsApi } from './PayIntV1PositionDefaultDimensionsApi';

/**
 * This class represents the entity "PayIntV1PositionDefaultDimensions" of service "d365_metadata".
 */
export class PayIntV1PositionDefaultDimensions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PayIntV1PositionDefaultDimensionsType<T>
{
  /**
   * Technical entity name for PayIntV1PositionDefaultDimensions.
   */
  static override _entityName = 'PayIntV1PositionDefaultDimensions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PayIntV1PositionDefaultDimensions entity.
   */
  static _keys = ['PositionId', 'LegalEntityDataArea'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Legal Entity Data Area.
   */
  declare legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  /**
   * Template Legal Entity Id.
   * @nullable
   */
  declare templateLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Distribution Template Id.
   * @nullable
   */
  declare distributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Display Value.
   * @nullable
   */
  declare dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PayIntV1PositionDefaultDimensionsApi<T>) {
    super(_entityApi);
  }
}

export interface PayIntV1PositionDefaultDimensionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  legalEntityDataArea: DeserializedType<T, 'Edm.String'>;
  templateLegalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  distributionTemplateId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { RetailInfocodeAssociationsApi } from './RetailInfocodeAssociationsApi';
import { RetailInfocodeRefTableIdBase } from './RetailInfocodeRefTableIdBase';
import { NoYes } from './NoYes';
import { RetailNoneAlwaysPositiveNegative } from './RetailNoneAlwaysPositiveNegative';

/**
 * This class represents the entity "RetailInfocodeAssociations" of service "d365_metadata".
 */
export class RetailInfocodeAssociations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailInfocodeAssociationsType<T>
{
  /**
   * Technical entity name for RetailInfocodeAssociations.
   */
  static override _entityName = 'RetailInfocodeAssociations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailInfocodeAssociations entity.
   */
  static _keys = [
    'dataAreaId',
    'RefTableId',
    'RefRelation1',
    'RefRelation2',
    'RefRelation3',
    'InfocodeId'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Table Id.
   * @nullable
   */
  declare refTableId?: RetailInfocodeRefTableIdBase | null;
  /**
   * Ref Relation 1.
   */
  declare refRelation1: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Relation 2.
   */
  declare refRelation2: DeserializedType<T, 'Edm.String'>;
  /**
   * Ref Relation 3.
   */
  declare refRelation3: DeserializedType<T, 'Edm.String'>;
  /**
   * Infocode Id.
   */
  declare infocodeId: DeserializedType<T, 'Edm.String'>;
  /**
   * Input Required.
   * @nullable
   */
  declare inputRequired?: NoYes | null;
  /**
   * Sequence.
   */
  declare sequence: DeserializedType<T, 'Edm.Int32'>;
  /**
   * When Required.
   * @nullable
   */
  declare whenRequired?: RetailNoneAlwaysPositiveNegative | null;

  constructor(_entityApi: RetailInfocodeAssociationsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailInfocodeAssociationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  refTableId?: RetailInfocodeRefTableIdBase | null;
  refRelation1: DeserializedType<T, 'Edm.String'>;
  refRelation2: DeserializedType<T, 'Edm.String'>;
  refRelation3: DeserializedType<T, 'Edm.String'>;
  infocodeId: DeserializedType<T, 'Edm.String'>;
  inputRequired?: NoYes | null;
  sequence: DeserializedType<T, 'Edm.Int32'>;
  whenRequired?: RetailNoneAlwaysPositiveNegative | null;
}

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
import type { ParsingSetupsApi } from './ParsingSetupsApi';
import { NoYes } from './NoYes';
import { Whsgs1Type } from './Whsgs1Type';

/**
 * This class represents the entity "ParsingSetups" of service "d365_metadata".
 */
export class ParsingSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ParsingSetupsType<T>
{
  /**
   * Technical entity name for ParsingSetups.
   */
  static override _entityName = 'ParsingSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ParsingSetups entity.
   */
  static _keys = ['Identifier'];
  /**
   * Identifier.
   */
  declare identifier: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Decimal.
   * @nullable
   */
  declare isDecimal?: NoYes | null;
  /**
   * Length.
   */
  declare length: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Is Fixed Length.
   * @nullable
   */
  declare isFixedLength?: NoYes | null;
  /**
   * Add Identifier.
   * @nullable
   */
  declare addIdentifier?: NoYes | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: Whsgs1Type | null;

  constructor(_entityApi: ParsingSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ParsingSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  identifier: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  isDecimal?: NoYes | null;
  length: DeserializedType<T, 'Edm.Int32'>;
  isFixedLength?: NoYes | null;
  addIdentifier?: NoYes | null;
  type?: Whsgs1Type | null;
}

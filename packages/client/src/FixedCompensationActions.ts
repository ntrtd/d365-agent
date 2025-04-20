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
import type { FixedCompensationActionsApi } from './FixedCompensationActionsApi';
import { NoYes } from './NoYes';
import { HrmCompFixedActionType } from './HrmCompFixedActionType';
import {
  PersonnelActionTypes,
  PersonnelActionTypesType
} from './PersonnelActionTypes';

/**
 * This class represents the entity "FixedCompensationActions" of service "d365_metadata".
 */
export class FixedCompensationActions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements FixedCompensationActionsType<T>
{
  /**
   * Technical entity name for FixedCompensationActions.
   */
  static override _entityName = 'FixedCompensationActions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the FixedCompensationActions entity.
   */
  static _keys = ['dataAreaId', 'Action'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Action.
   */
  declare action: DeserializedType<T, 'Edm.String'>;
  /**
   * Active.
   * @nullable
   */
  declare active?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Type.
   * @nullable
   */
  declare type?: HrmCompFixedActionType | null;
  /**
   * One-to-many navigation property to the {@link PersonnelActionTypes} entity.
   */
  declare personnelActionType: PersonnelActionTypes<T>[];

  constructor(_entityApi: FixedCompensationActionsApi<T>) {
    super(_entityApi);
  }
}

export interface FixedCompensationActionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  action: DeserializedType<T, 'Edm.String'>;
  active?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  type?: HrmCompFixedActionType | null;
  personnelActionType: PersonnelActionTypesType<T>[];
}

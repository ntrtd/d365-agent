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
import type { PersonnelActionTypesApi } from './PersonnelActionTypesApi';
import { HcmActionType } from './HcmActionType';
import {
  FixedCompensationActions,
  FixedCompensationActionsType
} from './FixedCompensationActions';

/**
 * This class represents the entity "PersonnelActionTypes" of service "d365_metadata".
 */
export class PersonnelActionTypes<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements PersonnelActionTypesType<T>
{
  /**
   * Technical entity name for PersonnelActionTypes.
   */
  static override _entityName = 'PersonnelActionTypes';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PersonnelActionTypes entity.
   */
  static _keys = ['PersonnelActionType'];
  /**
   * Personnel Action Type.
   */
  declare personnelActionType: DeserializedType<T, 'Edm.String'>;
  /**
   * Workflow.
   * @nullable
   */
  declare workflow?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personnel Action.
   * @nullable
   */
  declare personnelAction?: HcmActionType | null;
  /**
   * Legal Entity.
   * @nullable
   */
  declare legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fixed Compensation Action.
   * @nullable
   */
  declare fixedCompensationAction?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link FixedCompensationActions} entity.
   */
  declare relatedFixedCompensationAction?: FixedCompensationActions<T> | null;

  constructor(_entityApi: PersonnelActionTypesApi<T>) {
    super(_entityApi);
  }
}

export interface PersonnelActionTypesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelActionType: DeserializedType<T, 'Edm.String'>;
  workflow?: DeserializedType<T, 'Edm.String'> | null;
  personnelAction?: HcmActionType | null;
  legalEntity?: DeserializedType<T, 'Edm.String'> | null;
  fixedCompensationAction?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  relatedFixedCompensationAction?: FixedCompensationActionsType<T> | null;
}

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
import type { EssWorkersApi } from './EssWorkersApi';
import {
  EssLeaveTimeOffDates,
  EssLeaveTimeOffDatesType
} from './EssLeaveTimeOffDates';
import {
  EssLeaveRequestHeaders,
  EssLeaveRequestHeadersType
} from './EssLeaveRequestHeaders';
import {
  EssWorkerManagerRelations,
  EssWorkerManagerRelationsType
} from './EssWorkerManagerRelations';
import {
  MssLeaveTimeOffDates,
  MssLeaveTimeOffDatesType
} from './MssLeaveTimeOffDates';
import {
  EssLeaveRequestAssignedHeaders,
  EssLeaveRequestAssignedHeadersType
} from './EssLeaveRequestAssignedHeaders';

/**
 * This class represents the entity "EssWorkers" of service "d365_metadata".
 */
export class EssWorkers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EssWorkersType<T>
{
  /**
   * Technical entity name for EssWorkers.
   */
  static override _entityName = 'EssWorkers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EssWorkers entity.
   */
  static _keys = ['PersonnelNumber'];
  /**
   * Personnel Number.
   */
  declare personnelNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Type.
   * @nullable
   */
  declare partyType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Sequence Display As.
   * @nullable
   */
  declare nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Suffix.
   * @nullable
   */
  declare personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Party Number.
   * @nullable
   */
  declare partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Suffix.
   * @nullable
   */
  declare professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Professional Title.
   * @nullable
   */
  declare professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aad User Principal Name.
   * @nullable
   */
  declare aadUserPrincipalName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Personal Title.
   * @nullable
   */
  declare personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Aad User Object Id.
   */
  declare aadUserObjectId: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Phonetic First Name.
   * @nullable
   */
  declare phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name Prefix.
   * @nullable
   */
  declare lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Known As.
   * @nullable
   */
  declare knownAs?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Middle Name.
   * @nullable
   */
  declare phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Middle Name.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Phonetic Last Name.
   * @nullable
   */
  declare phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name Alias.
   * @nullable
   */
  declare nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * @nullable
   */
  declare firstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link EssLeaveTimeOffDates} entity.
   */
  declare timeOffDates: EssLeaveTimeOffDates<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveRequestHeaders} entity.
   */
  declare essLeaveRequestHeaders: EssLeaveRequestHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveRequestHeaders} entity.
   */
  declare submittedLeaveRequests: EssLeaveRequestHeaders<T>[];
  /**
   * One-to-many navigation property to the {@link EssWorkerManagerRelations} entity.
   */
  declare reportRelations: EssWorkerManagerRelations<T>[];
  /**
   * One-to-many navigation property to the {@link EssWorkerManagerRelations} entity.
   */
  declare managerRelations: EssWorkerManagerRelations<T>[];
  /**
   * One-to-many navigation property to the {@link MssLeaveTimeOffDates} entity.
   */
  declare reportsTimeOffDates: MssLeaveTimeOffDates<T>[];
  /**
   * One-to-many navigation property to the {@link EssLeaveRequestAssignedHeaders} entity.
   */
  declare submittedLeaveRequestAssignedHeaders: EssLeaveRequestAssignedHeaders<T>[];

  constructor(_entityApi: EssWorkersApi<T>) {
    super(_entityApi);
  }
}

export interface EssWorkersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  personnelNumber: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  partyType?: DeserializedType<T, 'Edm.String'> | null;
  nameSequenceDisplayAs?: DeserializedType<T, 'Edm.String'> | null;
  personalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  partyNumber?: DeserializedType<T, 'Edm.String'> | null;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  professionalSuffix?: DeserializedType<T, 'Edm.String'> | null;
  professionalTitle?: DeserializedType<T, 'Edm.String'> | null;
  aadUserPrincipalName?: DeserializedType<T, 'Edm.String'> | null;
  personalTitle?: DeserializedType<T, 'Edm.String'> | null;
  aadUserObjectId: DeserializedType<T, 'Edm.Guid'>;
  phoneticFirstName?: DeserializedType<T, 'Edm.String'> | null;
  lastNamePrefix?: DeserializedType<T, 'Edm.String'> | null;
  knownAs?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  phoneticMiddleName?: DeserializedType<T, 'Edm.String'> | null;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  phoneticLastName?: DeserializedType<T, 'Edm.String'> | null;
  nameAlias?: DeserializedType<T, 'Edm.String'> | null;
  firstName?: DeserializedType<T, 'Edm.String'> | null;
  timeOffDates: EssLeaveTimeOffDatesType<T>[];
  essLeaveRequestHeaders: EssLeaveRequestHeadersType<T>[];
  submittedLeaveRequests: EssLeaveRequestHeadersType<T>[];
  reportRelations: EssWorkerManagerRelationsType<T>[];
  managerRelations: EssWorkerManagerRelationsType<T>[];
  reportsTimeOffDates: MssLeaveTimeOffDatesType<T>[];
  submittedLeaveRequestAssignedHeaders: EssLeaveRequestAssignedHeadersType<T>[];
}

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
import type { ApplicationInboxApi } from './ApplicationInboxApi';
import { HrmApplicationBasketCreatedSource } from './HrmApplicationBasketCreatedSource';

/**
 * This class represents the entity "ApplicationInbox" of service "d365_metadata".
 */
export class ApplicationInbox<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ApplicationInboxType<T>
{
  /**
   * Technical entity name for ApplicationInbox.
   */
  static override _entityName = 'ApplicationInbox';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ApplicationInbox entity.
   */
  static _keys = ['dataAreaId', 'Applicant', 'RecruitmentProject'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Applicant.
   */
  declare applicant: DeserializedType<T, 'Edm.String'>;
  /**
   * Recruitment Project.
   */
  declare recruitmentProject: DeserializedType<T, 'Edm.String'>;
  /**
   * Apartment.
   * @nullable
   */
  declare apartment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expire Date.
   */
  declare expireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Code.
   * @nullable
   */
  declare streetCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Building.
   * @nullable
   */
  declare building?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Settlement.
   * @nullable
   */
  declare settlement?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Person Id.
   * @nullable
   */
  declare personId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email External.
   * @nullable
   */
  declare emailExternal?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Town Id.
   * @nullable
   */
  declare townId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region.
   * @nullable
   */
  declare countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Group Of Houses.
   * @nullable
   */
  declare groupOfHouses?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Source.
   * @nullable
   */
  declare createdSource?: HrmApplicationBasketCreatedSource | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mobile Phone.
   * @nullable
   */
  declare mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ApplicationInboxApi<T>) {
    super(_entityApi);
  }
}

export interface ApplicationInboxType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  applicant: DeserializedType<T, 'Edm.String'>;
  recruitmentProject: DeserializedType<T, 'Edm.String'>;
  apartment?: DeserializedType<T, 'Edm.String'> | null;
  expireDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  streetCode?: DeserializedType<T, 'Edm.String'> | null;
  building?: DeserializedType<T, 'Edm.String'> | null;
  settlement?: DeserializedType<T, 'Edm.String'> | null;
  personId?: DeserializedType<T, 'Edm.String'> | null;
  emailExternal?: DeserializedType<T, 'Edm.String'> | null;
  townId?: DeserializedType<T, 'Edm.String'> | null;
  countryRegion?: DeserializedType<T, 'Edm.String'> | null;
  groupOfHouses?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  createdSource?: HrmApplicationBasketCreatedSource | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  mobilePhone?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { EfDocTechResponsibleInformationsApi } from './EfDocTechResponsibleInformationsApi';

/**
 * This class represents the entity "EFDocTechResponsibleInformations" of service "d365_metadata".
 */
export class EfDocTechResponsibleInformations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements EfDocTechResponsibleInformationsType<T>
{
  /**
   * Technical entity name for EfDocTechResponsibleInformations.
   */
  static override _entityName = 'EFDocTechResponsibleInformations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EfDocTechResponsibleInformations entity.
   */
  static _keys = ['dataAreaId', 'State'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   */
  declare state: DeserializedType<T, 'Edm.String'>;
  /**
   * Technical Responsible Csrt Id.
   * @nullable
   */
  declare technicalResponsibleCsrtId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Responsible Contact Name.
   * @nullable
   */
  declare technicalResponsibleContactName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Technical Responsible Csrt.
   * @nullable
   */
  declare technicalResponsibleCsrt?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Responsible Phone.
   * @nullable
   */
  declare technicalResponsiblePhone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Responsible Cnpj.
   * @nullable
   */
  declare technicalResponsibleCnpj?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Technical Responsible Email.
   * @nullable
   */
  declare technicalResponsibleEmail?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EfDocTechResponsibleInformationsApi<T>) {
    super(_entityApi);
  }
}

export interface EfDocTechResponsibleInformationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  state: DeserializedType<T, 'Edm.String'>;
  technicalResponsibleCsrtId?: DeserializedType<T, 'Edm.String'> | null;
  technicalResponsibleContactName?: DeserializedType<T, 'Edm.String'> | null;
  technicalResponsibleCsrt?: DeserializedType<T, 'Edm.String'> | null;
  technicalResponsiblePhone?: DeserializedType<T, 'Edm.String'> | null;
  technicalResponsibleCnpj?: DeserializedType<T, 'Edm.String'> | null;
  technicalResponsibleEmail?: DeserializedType<T, 'Edm.String'> | null;
}

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
import type { ProspectiveVendorRegistrationRequestsApi } from './ProspectiveVendorRegistrationRequestsApi';
import { VendProspectiveVendorRegistrationRequestState } from './VendProspectiveVendorRegistrationRequestState';
import { DirPartyBaseType } from './DirPartyBaseType';

/**
 * This class represents the entity "ProspectiveVendorRegistrationRequests" of service "d365_metadata".
 */
export class ProspectiveVendorRegistrationRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ProspectiveVendorRegistrationRequestsType<T>
{
  /**
   * Technical entity name for ProspectiveVendorRegistrationRequests.
   */
  static override _entityName = 'ProspectiveVendorRegistrationRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProspectiveVendorRegistrationRequests entity.
   */
  static _keys = ['EmailAddress'];
  /**
   * Email Address.
   */
  declare emailAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Request State.
   * @nullable
   */
  declare requestState?: VendProspectiveVendorRegistrationRequestState | null;
  /**
   * Business Justification Description.
   * @nullable
   */
  declare businessJustificationDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Submitted Date.
   */
  declare submittedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Business Line Description.
   * @nullable
   */
  declare businessLineDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Name.
   * @nullable
   */
  declare companyName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Processed Date.
   */
  declare processedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Language Id.
   * @nullable
   */
  declare languageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Number.
   * @nullable
   */
  declare organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Last Name.
   * @nullable
   */
  declare contactPersonLastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Type.
   * @nullable
   */
  declare organizationType?: DirPartyBaseType | null;
  /**
   * User Request Id.
   * @nullable
   */
  declare userRequestId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Company.
   * @nullable
   */
  declare requestCompany?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person First Name.
   * @nullable
   */
  declare contactPersonFirstName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Contact Person Middle Name.
   * @nullable
   */
  declare contactPersonMiddleName?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: ProspectiveVendorRegistrationRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface ProspectiveVendorRegistrationRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  emailAddress: DeserializedType<T, 'Edm.String'>;
  requestState?: VendProspectiveVendorRegistrationRequestState | null;
  businessJustificationDescription?: DeserializedType<T, 'Edm.String'> | null;
  submittedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  businessLineDescription?: DeserializedType<T, 'Edm.String'> | null;
  companyName?: DeserializedType<T, 'Edm.String'> | null;
  processedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  languageId?: DeserializedType<T, 'Edm.String'> | null;
  organizationNumber?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonLastName?: DeserializedType<T, 'Edm.String'> | null;
  organizationType?: DirPartyBaseType | null;
  userRequestId?: DeserializedType<T, 'Edm.String'> | null;
  requestCompany?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonFirstName?: DeserializedType<T, 'Edm.String'> | null;
  contactPersonMiddleName?: DeserializedType<T, 'Edm.String'> | null;
}

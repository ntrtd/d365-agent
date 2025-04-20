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
import type { VendorCollaborationUserRequestsApi } from './VendorCollaborationUserRequestsApi';
import { SysUserRequestUserType } from './SysUserRequestUserType';
import { SysUserRequestStatus } from './SysUserRequestStatus';
import { SysUserRequestAction } from './SysUserRequestAction';

/**
 * This class represents the entity "VendorCollaborationUserRequests" of service "d365_metadata".
 */
export class VendorCollaborationUserRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorCollaborationUserRequestsType<T>
{
  /**
   * Technical entity name for VendorCollaborationUserRequests.
   */
  static override _entityName = 'VendorCollaborationUserRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorCollaborationUserRequests entity.
   */
  static _keys = ['RequestId'];
  /**
   * Request Id.
   */
  declare requestId: DeserializedType<T, 'Edm.String'>;
  /**
   * User Alias.
   * @nullable
   */
  declare userAlias?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Resolved Date Time.
   */
  declare resolvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * User Type.
   * @nullable
   */
  declare userType?: SysUserRequestUserType | null;
  /**
   * User Network Domain.
   * @nullable
   */
  declare userNetworkDomain?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Users Language Id.
   * @nullable
   */
  declare usersLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Status.
   * @nullable
   */
  declare requestStatus?: SysUserRequestStatus | null;
  /**
   * User Email.
   * @nullable
   */
  declare userEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Request Action.
   * @nullable
   */
  declare requestAction?: SysUserRequestAction | null;
  /**
   * Submitted Date Time.
   */
  declare submittedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Users Full Name.
   * @nullable
   */
  declare usersFullName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User Id.
   * @nullable
   */
  declare userId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Business Justification.
   * @nullable
   */
  declare businessJustification?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: VendorCollaborationUserRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorCollaborationUserRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  requestId: DeserializedType<T, 'Edm.String'>;
  userAlias?: DeserializedType<T, 'Edm.String'> | null;
  resolvedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  userType?: SysUserRequestUserType | null;
  userNetworkDomain?: DeserializedType<T, 'Edm.String'> | null;
  usersLanguageId?: DeserializedType<T, 'Edm.String'> | null;
  requestStatus?: SysUserRequestStatus | null;
  userEmail?: DeserializedType<T, 'Edm.String'> | null;
  requestAction?: SysUserRequestAction | null;
  submittedDateTime: DeserializedType<T, 'Edm.DateTimeOffset'>;
  usersFullName?: DeserializedType<T, 'Edm.String'> | null;
  userId?: DeserializedType<T, 'Edm.String'> | null;
  businessJustification?: DeserializedType<T, 'Edm.String'> | null;
}

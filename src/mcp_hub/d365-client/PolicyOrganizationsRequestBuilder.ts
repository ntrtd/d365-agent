/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { PolicyOrganizations } from './PolicyOrganizations';
import { SysPolicyTypeEnum } from './SysPolicyTypeEnum';

/**
 * Request builder class for operations supported on the {@link PolicyOrganizations} entity.
 */
export class PolicyOrganizationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<PolicyOrganizations<T>, T> {
  /**
   * Returns a request builder for querying all `PolicyOrganizations` entities.
   * @returns A request builder for creating requests to retrieve all `PolicyOrganizations` entities.
   */
  getAll(): GetAllRequestBuilder<PolicyOrganizations<T>, T> {
    return new GetAllRequestBuilder<PolicyOrganizations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `PolicyOrganizations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PolicyOrganizations`.
   */
  create(
    entity: PolicyOrganizations<T>
  ): CreateRequestBuilder<PolicyOrganizations<T>, T> {
    return new CreateRequestBuilder<PolicyOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `PolicyOrganizations` entity based on its keys.
   * @param policyName Key property. See {@link PolicyOrganizations.policyName}.
   * @param policyType Key property. See {@link PolicyOrganizations.policyType}.
   * @param partyNumber Key property. See {@link PolicyOrganizations.partyNumber}.
   * @param hierarchyName Key property. See {@link PolicyOrganizations.hierarchyName}.
   * @param validFrom Key property. See {@link PolicyOrganizations.validFrom}.
   * @returns A request builder for creating requests to retrieve one `PolicyOrganizations` entity based on its keys.
   */
  getByKey(
    policyName: DeserializedType<T, 'Edm.String'>,
    policyType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SysPolicyTypeEnum'
    >,
    partyNumber: DeserializedType<T, 'Edm.String'>,
    hierarchyName: DeserializedType<T, 'Edm.String'>,
    validFrom: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<PolicyOrganizations<T>, T> {
    return new GetByKeyRequestBuilder<PolicyOrganizations<T>, T>(
      this.entityApi,
      {
        PolicyName: policyName,
        PolicyType: policyType,
        PartyNumber: partyNumber,
        HierarchyName: hierarchyName,
        ValidFrom: validFrom
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `PolicyOrganizations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PolicyOrganizations`.
   */
  update(
    entity: PolicyOrganizations<T>
  ): UpdateRequestBuilder<PolicyOrganizations<T>, T> {
    return new UpdateRequestBuilder<PolicyOrganizations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `PolicyOrganizations`.
   * @param policyName Key property. See {@link PolicyOrganizations.policyName}.
   * @param policyType Key property. See {@link PolicyOrganizations.policyType}.
   * @param partyNumber Key property. See {@link PolicyOrganizations.partyNumber}.
   * @param hierarchyName Key property. See {@link PolicyOrganizations.hierarchyName}.
   * @param validFrom Key property. See {@link PolicyOrganizations.validFrom}.
   * @returns A request builder for creating requests that delete an entity of type `PolicyOrganizations`.
   */
  delete(
    policyName: string,
    policyType: SysPolicyTypeEnum,
    partyNumber: string,
    hierarchyName: string,
    validFrom: Moment
  ): DeleteRequestBuilder<PolicyOrganizations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `PolicyOrganizations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PolicyOrganizations` by taking the entity as a parameter.
   */
  delete(
    entity: PolicyOrganizations<T>
  ): DeleteRequestBuilder<PolicyOrganizations<T>, T>;
  delete(
    policyNameOrEntity: any,
    policyType?: SysPolicyTypeEnum,
    partyNumber?: string,
    hierarchyName?: string,
    validFrom?: Moment
  ): DeleteRequestBuilder<PolicyOrganizations<T>, T> {
    return new DeleteRequestBuilder<PolicyOrganizations<T>, T>(
      this.entityApi,
      policyNameOrEntity instanceof PolicyOrganizations
        ? policyNameOrEntity
        : {
            PolicyName: policyNameOrEntity!,
            PolicyType: policyType!,
            PartyNumber: partyNumber!,
            HierarchyName: hierarchyName!,
            ValidFrom: validFrom!
          }
    );
  }
}

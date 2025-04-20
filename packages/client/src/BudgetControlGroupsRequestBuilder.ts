/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
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
import { BudgetControlGroups } from './BudgetControlGroups';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlGroups} entity.
 */
export class BudgetControlGroupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlGroups<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlGroups` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlGroups` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlGroups<T>, T> {
    return new GetAllRequestBuilder<BudgetControlGroups<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BudgetControlGroups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlGroups`.
   */
  create(
    entity: BudgetControlGroups<T>
  ): CreateRequestBuilder<BudgetControlGroups<T>, T> {
    return new CreateRequestBuilder<BudgetControlGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlGroups` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlGroups.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlGroups.legalEntityId}.
   * @param status Key property. See {@link BudgetControlGroups.status}.
   * @param memberName Key property. See {@link BudgetControlGroups.memberName}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlGroups` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    memberName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlGroups<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlGroups<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        MemberName: memberName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlGroups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlGroups`.
   */
  update(
    entity: BudgetControlGroups<T>
  ): UpdateRequestBuilder<BudgetControlGroups<T>, T> {
    return new UpdateRequestBuilder<BudgetControlGroups<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlGroups`.
   * @param dataAreaId Key property. See {@link BudgetControlGroups.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlGroups.legalEntityId}.
   * @param status Key property. See {@link BudgetControlGroups.status}.
   * @param memberName Key property. See {@link BudgetControlGroups.memberName}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlGroups`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    memberName: string
  ): DeleteRequestBuilder<BudgetControlGroups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlGroups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlGroups` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlGroups<T>
  ): DeleteRequestBuilder<BudgetControlGroups<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    memberName?: string
  ): DeleteRequestBuilder<BudgetControlGroups<T>, T> {
    return new DeleteRequestBuilder<BudgetControlGroups<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlGroups
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            MemberName: memberName!
          }
    );
  }
}

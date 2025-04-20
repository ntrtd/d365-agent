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
import { BudgetControlMessageLevels } from './BudgetControlMessageLevels';
import { BudgetControlConfigurationStatus } from './BudgetControlConfigurationStatus';

/**
 * Request builder class for operations supported on the {@link BudgetControlMessageLevels} entity.
 */
export class BudgetControlMessageLevelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BudgetControlMessageLevels<T>, T> {
  /**
   * Returns a request builder for querying all `BudgetControlMessageLevels` entities.
   * @returns A request builder for creating requests to retrieve all `BudgetControlMessageLevels` entities.
   */
  getAll(): GetAllRequestBuilder<BudgetControlMessageLevels<T>, T> {
    return new GetAllRequestBuilder<BudgetControlMessageLevels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `BudgetControlMessageLevels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BudgetControlMessageLevels`.
   */
  create(
    entity: BudgetControlMessageLevels<T>
  ): CreateRequestBuilder<BudgetControlMessageLevels<T>, T> {
    return new CreateRequestBuilder<BudgetControlMessageLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BudgetControlMessageLevels` entity based on its keys.
   * @param dataAreaId Key property. See {@link BudgetControlMessageLevels.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlMessageLevels.legalEntityId}.
   * @param status Key property. See {@link BudgetControlMessageLevels.status}.
   * @param userGroupId Key property. See {@link BudgetControlMessageLevels.userGroupId}.
   * @returns A request builder for creating requests to retrieve one `BudgetControlMessageLevels` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    legalEntityId: DeserializedType<T, 'Edm.String'>,
    status: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.BudgetControlConfigurationStatus'
    >,
    userGroupId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BudgetControlMessageLevels<T>, T> {
    return new GetByKeyRequestBuilder<BudgetControlMessageLevels<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        LegalEntityId: legalEntityId,
        Status: status,
        UserGroupId: userGroupId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BudgetControlMessageLevels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BudgetControlMessageLevels`.
   */
  update(
    entity: BudgetControlMessageLevels<T>
  ): UpdateRequestBuilder<BudgetControlMessageLevels<T>, T> {
    return new UpdateRequestBuilder<BudgetControlMessageLevels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BudgetControlMessageLevels`.
   * @param dataAreaId Key property. See {@link BudgetControlMessageLevels.dataAreaId}.
   * @param legalEntityId Key property. See {@link BudgetControlMessageLevels.legalEntityId}.
   * @param status Key property. See {@link BudgetControlMessageLevels.status}.
   * @param userGroupId Key property. See {@link BudgetControlMessageLevels.userGroupId}.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlMessageLevels`.
   */
  delete(
    dataAreaId: string,
    legalEntityId: string,
    status: BudgetControlConfigurationStatus,
    userGroupId: string
  ): DeleteRequestBuilder<BudgetControlMessageLevels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BudgetControlMessageLevels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BudgetControlMessageLevels` by taking the entity as a parameter.
   */
  delete(
    entity: BudgetControlMessageLevels<T>
  ): DeleteRequestBuilder<BudgetControlMessageLevels<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    legalEntityId?: string,
    status?: BudgetControlConfigurationStatus,
    userGroupId?: string
  ): DeleteRequestBuilder<BudgetControlMessageLevels<T>, T> {
    return new DeleteRequestBuilder<BudgetControlMessageLevels<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof BudgetControlMessageLevels
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            LegalEntityId: legalEntityId!,
            Status: status!,
            UserGroupId: userGroupId!
          }
    );
  }
}

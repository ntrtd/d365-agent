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
import { CdsProjectContractLineMilestones } from './CdsProjectContractLineMilestones';

/**
 * Request builder class for operations supported on the {@link CdsProjectContractLineMilestones} entity.
 */
export class CdsProjectContractLineMilestonesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsProjectContractLineMilestones<T>, T> {
  /**
   * Returns a request builder for querying all `CdsProjectContractLineMilestones` entities.
   * @returns A request builder for creating requests to retrieve all `CdsProjectContractLineMilestones` entities.
   */
  getAll(): GetAllRequestBuilder<CdsProjectContractLineMilestones<T>, T> {
    return new GetAllRequestBuilder<CdsProjectContractLineMilestones<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CdsProjectContractLineMilestones` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsProjectContractLineMilestones`.
   */
  create(
    entity: CdsProjectContractLineMilestones<T>
  ): CreateRequestBuilder<CdsProjectContractLineMilestones<T>, T> {
    return new CreateRequestBuilder<CdsProjectContractLineMilestones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsProjectContractLineMilestones` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsProjectContractLineMilestones.dataAreaId}.
   * @param transactionId Key property. See {@link CdsProjectContractLineMilestones.transactionId}.
   * @returns A request builder for creating requests to retrieve one `CdsProjectContractLineMilestones` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    transactionId: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<CdsProjectContractLineMilestones<T>, T> {
    return new GetByKeyRequestBuilder<CdsProjectContractLineMilestones<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TransactionId: transactionId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CdsProjectContractLineMilestones`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsProjectContractLineMilestones`.
   */
  update(
    entity: CdsProjectContractLineMilestones<T>
  ): UpdateRequestBuilder<CdsProjectContractLineMilestones<T>, T> {
    return new UpdateRequestBuilder<CdsProjectContractLineMilestones<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsProjectContractLineMilestones`.
   * @param dataAreaId Key property. See {@link CdsProjectContractLineMilestones.dataAreaId}.
   * @param transactionId Key property. See {@link CdsProjectContractLineMilestones.transactionId}.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjectContractLineMilestones`.
   */
  delete(
    dataAreaId: string,
    transactionId: string
  ): DeleteRequestBuilder<CdsProjectContractLineMilestones<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsProjectContractLineMilestones`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsProjectContractLineMilestones` by taking the entity as a parameter.
   */
  delete(
    entity: CdsProjectContractLineMilestones<T>
  ): DeleteRequestBuilder<CdsProjectContractLineMilestones<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    transactionId?: string
  ): DeleteRequestBuilder<CdsProjectContractLineMilestones<T>, T> {
    return new DeleteRequestBuilder<CdsProjectContractLineMilestones<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsProjectContractLineMilestones
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TransactionId: transactionId!
          }
    );
  }
}

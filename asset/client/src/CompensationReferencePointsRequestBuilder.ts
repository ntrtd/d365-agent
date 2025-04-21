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
import { CompensationReferencePoints } from './CompensationReferencePoints';

/**
 * Request builder class for operations supported on the {@link CompensationReferencePoints} entity.
 */
export class CompensationReferencePointsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CompensationReferencePoints<T>, T> {
  /**
   * Returns a request builder for querying all `CompensationReferencePoints` entities.
   * @returns A request builder for creating requests to retrieve all `CompensationReferencePoints` entities.
   */
  getAll(): GetAllRequestBuilder<CompensationReferencePoints<T>, T> {
    return new GetAllRequestBuilder<CompensationReferencePoints<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `CompensationReferencePoints` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompensationReferencePoints`.
   */
  create(
    entity: CompensationReferencePoints<T>
  ): CreateRequestBuilder<CompensationReferencePoints<T>, T> {
    return new CreateRequestBuilder<CompensationReferencePoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CompensationReferencePoints` entity based on its keys.
   * @param dataAreaId Key property. See {@link CompensationReferencePoints.dataAreaId}.
   * @param referenceSetup Key property. See {@link CompensationReferencePoints.referenceSetup}.
   * @returns A request builder for creating requests to retrieve one `CompensationReferencePoints` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    referenceSetup: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CompensationReferencePoints<T>, T> {
    return new GetByKeyRequestBuilder<CompensationReferencePoints<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        ReferenceSetup: referenceSetup
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CompensationReferencePoints`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompensationReferencePoints`.
   */
  update(
    entity: CompensationReferencePoints<T>
  ): UpdateRequestBuilder<CompensationReferencePoints<T>, T> {
    return new UpdateRequestBuilder<CompensationReferencePoints<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CompensationReferencePoints`.
   * @param dataAreaId Key property. See {@link CompensationReferencePoints.dataAreaId}.
   * @param referenceSetup Key property. See {@link CompensationReferencePoints.referenceSetup}.
   * @returns A request builder for creating requests that delete an entity of type `CompensationReferencePoints`.
   */
  delete(
    dataAreaId: string,
    referenceSetup: string
  ): DeleteRequestBuilder<CompensationReferencePoints<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CompensationReferencePoints`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompensationReferencePoints` by taking the entity as a parameter.
   */
  delete(
    entity: CompensationReferencePoints<T>
  ): DeleteRequestBuilder<CompensationReferencePoints<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    referenceSetup?: string
  ): DeleteRequestBuilder<CompensationReferencePoints<T>, T> {
    return new DeleteRequestBuilder<CompensationReferencePoints<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CompensationReferencePoints
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReferenceSetup: referenceSetup!
          }
    );
  }
}

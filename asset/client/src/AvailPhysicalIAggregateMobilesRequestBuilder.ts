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
import { AvailPhysicalIAggregateMobiles } from './AvailPhysicalIAggregateMobiles';

/**
 * Request builder class for operations supported on the {@link AvailPhysicalIAggregateMobiles} entity.
 */
export class AvailPhysicalIAggregateMobilesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<AvailPhysicalIAggregateMobiles<T>, T> {
  /**
   * Returns a request builder for querying all `AvailPhysicalIAggregateMobiles` entities.
   * @returns A request builder for creating requests to retrieve all `AvailPhysicalIAggregateMobiles` entities.
   */
  getAll(): GetAllRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T> {
    return new GetAllRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `AvailPhysicalIAggregateMobiles` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AvailPhysicalIAggregateMobiles`.
   */
  create(
    entity: AvailPhysicalIAggregateMobiles<T>
  ): CreateRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T> {
    return new CreateRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `AvailPhysicalIAggregateMobiles` entity based on its keys.
   * @param dataAreaId Key property. See {@link AvailPhysicalIAggregateMobiles.dataAreaId}.
   * @param displayProductNumber Key property. See {@link AvailPhysicalIAggregateMobiles.displayProductNumber}.
   * @returns A request builder for creating requests to retrieve one `AvailPhysicalIAggregateMobiles` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    displayProductNumber: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T> {
    return new GetByKeyRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        DisplayProductNumber: displayProductNumber
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `AvailPhysicalIAggregateMobiles`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AvailPhysicalIAggregateMobiles`.
   */
  update(
    entity: AvailPhysicalIAggregateMobiles<T>
  ): UpdateRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T> {
    return new UpdateRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `AvailPhysicalIAggregateMobiles`.
   * @param dataAreaId Key property. See {@link AvailPhysicalIAggregateMobiles.dataAreaId}.
   * @param displayProductNumber Key property. See {@link AvailPhysicalIAggregateMobiles.displayProductNumber}.
   * @returns A request builder for creating requests that delete an entity of type `AvailPhysicalIAggregateMobiles`.
   */
  delete(
    dataAreaId: string,
    displayProductNumber: string
  ): DeleteRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `AvailPhysicalIAggregateMobiles`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AvailPhysicalIAggregateMobiles` by taking the entity as a parameter.
   */
  delete(
    entity: AvailPhysicalIAggregateMobiles<T>
  ): DeleteRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    displayProductNumber?: string
  ): DeleteRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T> {
    return new DeleteRequestBuilder<AvailPhysicalIAggregateMobiles<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof AvailPhysicalIAggregateMobiles
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            DisplayProductNumber: displayProductNumber!
          }
    );
  }
}

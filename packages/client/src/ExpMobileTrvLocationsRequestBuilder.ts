/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { ExpMobileTrvLocations } from './ExpMobileTrvLocations';

/**
 * Request builder class for operations supported on the {@link ExpMobileTrvLocations} entity.
 */
export class ExpMobileTrvLocationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ExpMobileTrvLocations<T>, T> {
  /**
   * Returns a request builder for querying all `ExpMobileTrvLocations` entities.
   * @returns A request builder for creating requests to retrieve all `ExpMobileTrvLocations` entities.
   */
  getAll(): GetAllRequestBuilder<ExpMobileTrvLocations<T>, T> {
    return new GetAllRequestBuilder<ExpMobileTrvLocations<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ExpMobileTrvLocations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExpMobileTrvLocations`.
   */
  create(
    entity: ExpMobileTrvLocations<T>
  ): CreateRequestBuilder<ExpMobileTrvLocations<T>, T> {
    return new CreateRequestBuilder<ExpMobileTrvLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ExpMobileTrvLocations` entity based on its keys.
   * @param dataAreaId Key property. See {@link ExpMobileTrvLocations.dataAreaId}.
   * @param entRecId Key property. See {@link ExpMobileTrvLocations.entRecId}.
   * @returns A request builder for creating requests to retrieve one `ExpMobileTrvLocations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    entRecId: DeserializedType<T, 'Edm.Int64'>
  ): GetByKeyRequestBuilder<ExpMobileTrvLocations<T>, T> {
    return new GetByKeyRequestBuilder<ExpMobileTrvLocations<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        EntRecId: entRecId
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ExpMobileTrvLocations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExpMobileTrvLocations`.
   */
  update(
    entity: ExpMobileTrvLocations<T>
  ): UpdateRequestBuilder<ExpMobileTrvLocations<T>, T> {
    return new UpdateRequestBuilder<ExpMobileTrvLocations<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ExpMobileTrvLocations`.
   * @param dataAreaId Key property. See {@link ExpMobileTrvLocations.dataAreaId}.
   * @param entRecId Key property. See {@link ExpMobileTrvLocations.entRecId}.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileTrvLocations`.
   */
  delete(
    dataAreaId: string,
    entRecId: BigNumber
  ): DeleteRequestBuilder<ExpMobileTrvLocations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ExpMobileTrvLocations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExpMobileTrvLocations` by taking the entity as a parameter.
   */
  delete(
    entity: ExpMobileTrvLocations<T>
  ): DeleteRequestBuilder<ExpMobileTrvLocations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    entRecId?: BigNumber
  ): DeleteRequestBuilder<ExpMobileTrvLocations<T>, T> {
    return new DeleteRequestBuilder<ExpMobileTrvLocations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ExpMobileTrvLocations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            EntRecId: entRecId!
          }
    );
  }
}

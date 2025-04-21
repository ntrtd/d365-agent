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
import { Prospects } from './Prospects';

/**
 * Request builder class for operations supported on the {@link Prospects} entity.
 */
export class ProspectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Prospects<T>, T> {
  /**
   * Returns a request builder for querying all `Prospects` entities.
   * @returns A request builder for creating requests to retrieve all `Prospects` entities.
   */
  getAll(): GetAllRequestBuilder<Prospects<T>, T> {
    return new GetAllRequestBuilder<Prospects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Prospects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Prospects`.
   */
  create(entity: Prospects<T>): CreateRequestBuilder<Prospects<T>, T> {
    return new CreateRequestBuilder<Prospects<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Prospects` entity based on its keys.
   * @param dataAreaId Key property. See {@link Prospects.dataAreaId}.
   * @param prospectId Key property. See {@link Prospects.prospectId}.
   * @returns A request builder for creating requests to retrieve one `Prospects` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    prospectId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Prospects<T>, T> {
    return new GetByKeyRequestBuilder<Prospects<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ProspectId: prospectId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Prospects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Prospects`.
   */
  update(entity: Prospects<T>): UpdateRequestBuilder<Prospects<T>, T> {
    return new UpdateRequestBuilder<Prospects<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Prospects`.
   * @param dataAreaId Key property. See {@link Prospects.dataAreaId}.
   * @param prospectId Key property. See {@link Prospects.prospectId}.
   * @returns A request builder for creating requests that delete an entity of type `Prospects`.
   */
  delete(
    dataAreaId: string,
    prospectId: string
  ): DeleteRequestBuilder<Prospects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Prospects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Prospects` by taking the entity as a parameter.
   */
  delete(entity: Prospects<T>): DeleteRequestBuilder<Prospects<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    prospectId?: string
  ): DeleteRequestBuilder<Prospects<T>, T> {
    return new DeleteRequestBuilder<Prospects<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Prospects
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ProspectId: prospectId!
          }
    );
  }
}

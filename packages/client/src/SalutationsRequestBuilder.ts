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
import { Salutations } from './Salutations';

/**
 * Request builder class for operations supported on the {@link Salutations} entity.
 */
export class SalutationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Salutations<T>, T> {
  /**
   * Returns a request builder for querying all `Salutations` entities.
   * @returns A request builder for creating requests to retrieve all `Salutations` entities.
   */
  getAll(): GetAllRequestBuilder<Salutations<T>, T> {
    return new GetAllRequestBuilder<Salutations<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Salutations` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Salutations`.
   */
  create(entity: Salutations<T>): CreateRequestBuilder<Salutations<T>, T> {
    return new CreateRequestBuilder<Salutations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Salutations` entity based on its keys.
   * @param dataAreaId Key property. See {@link Salutations.dataAreaId}.
   * @param salutationPhrase Key property. See {@link Salutations.salutationPhrase}.
   * @returns A request builder for creating requests to retrieve one `Salutations` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    salutationPhrase: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Salutations<T>, T> {
    return new GetByKeyRequestBuilder<Salutations<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      SalutationPhrase: salutationPhrase
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Salutations`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Salutations`.
   */
  update(entity: Salutations<T>): UpdateRequestBuilder<Salutations<T>, T> {
    return new UpdateRequestBuilder<Salutations<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Salutations`.
   * @param dataAreaId Key property. See {@link Salutations.dataAreaId}.
   * @param salutationPhrase Key property. See {@link Salutations.salutationPhrase}.
   * @returns A request builder for creating requests that delete an entity of type `Salutations`.
   */
  delete(
    dataAreaId: string,
    salutationPhrase: string
  ): DeleteRequestBuilder<Salutations<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Salutations`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Salutations` by taking the entity as a parameter.
   */
  delete(entity: Salutations<T>): DeleteRequestBuilder<Salutations<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    salutationPhrase?: string
  ): DeleteRequestBuilder<Salutations<T>, T> {
    return new DeleteRequestBuilder<Salutations<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof Salutations
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SalutationPhrase: salutationPhrase!
          }
    );
  }
}

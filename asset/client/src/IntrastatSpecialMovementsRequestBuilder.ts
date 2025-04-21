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
import { IntrastatSpecialMovements } from './IntrastatSpecialMovements';

/**
 * Request builder class for operations supported on the {@link IntrastatSpecialMovements} entity.
 */
export class IntrastatSpecialMovementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IntrastatSpecialMovements<T>, T> {
  /**
   * Returns a request builder for querying all `IntrastatSpecialMovements` entities.
   * @returns A request builder for creating requests to retrieve all `IntrastatSpecialMovements` entities.
   */
  getAll(): GetAllRequestBuilder<IntrastatSpecialMovements<T>, T> {
    return new GetAllRequestBuilder<IntrastatSpecialMovements<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `IntrastatSpecialMovements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IntrastatSpecialMovements`.
   */
  create(
    entity: IntrastatSpecialMovements<T>
  ): CreateRequestBuilder<IntrastatSpecialMovements<T>, T> {
    return new CreateRequestBuilder<IntrastatSpecialMovements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `IntrastatSpecialMovements` entity based on its keys.
   * @param dataAreaId Key property. See {@link IntrastatSpecialMovements.dataAreaId}.
   * @param specialMovement Key property. See {@link IntrastatSpecialMovements.specialMovement}.
   * @returns A request builder for creating requests to retrieve one `IntrastatSpecialMovements` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    specialMovement: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<IntrastatSpecialMovements<T>, T> {
    return new GetByKeyRequestBuilder<IntrastatSpecialMovements<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SpecialMovement: specialMovement
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `IntrastatSpecialMovements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IntrastatSpecialMovements`.
   */
  update(
    entity: IntrastatSpecialMovements<T>
  ): UpdateRequestBuilder<IntrastatSpecialMovements<T>, T> {
    return new UpdateRequestBuilder<IntrastatSpecialMovements<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `IntrastatSpecialMovements`.
   * @param dataAreaId Key property. See {@link IntrastatSpecialMovements.dataAreaId}.
   * @param specialMovement Key property. See {@link IntrastatSpecialMovements.specialMovement}.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatSpecialMovements`.
   */
  delete(
    dataAreaId: string,
    specialMovement: string
  ): DeleteRequestBuilder<IntrastatSpecialMovements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IntrastatSpecialMovements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IntrastatSpecialMovements` by taking the entity as a parameter.
   */
  delete(
    entity: IntrastatSpecialMovements<T>
  ): DeleteRequestBuilder<IntrastatSpecialMovements<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    specialMovement?: string
  ): DeleteRequestBuilder<IntrastatSpecialMovements<T>, T> {
    return new DeleteRequestBuilder<IntrastatSpecialMovements<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof IntrastatSpecialMovements
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SpecialMovement: specialMovement!
          }
    );
  }
}

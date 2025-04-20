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
import { ChargesTolerances } from './ChargesTolerances';

/**
 * Request builder class for operations supported on the {@link ChargesTolerances} entity.
 */
export class ChargesTolerancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ChargesTolerances<T>, T> {
  /**
   * Returns a request builder for querying all `ChargesTolerances` entities.
   * @returns A request builder for creating requests to retrieve all `ChargesTolerances` entities.
   */
  getAll(): GetAllRequestBuilder<ChargesTolerances<T>, T> {
    return new GetAllRequestBuilder<ChargesTolerances<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ChargesTolerances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ChargesTolerances`.
   */
  create(
    entity: ChargesTolerances<T>
  ): CreateRequestBuilder<ChargesTolerances<T>, T> {
    return new CreateRequestBuilder<ChargesTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ChargesTolerances` entity based on its keys.
   * @param dataAreaId Key property. See {@link ChargesTolerances.dataAreaId}.
   * @param chargesCode Key property. See {@link ChargesTolerances.chargesCode}.
   * @returns A request builder for creating requests to retrieve one `ChargesTolerances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    chargesCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ChargesTolerances<T>, T> {
    return new GetByKeyRequestBuilder<ChargesTolerances<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      ChargesCode: chargesCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ChargesTolerances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ChargesTolerances`.
   */
  update(
    entity: ChargesTolerances<T>
  ): UpdateRequestBuilder<ChargesTolerances<T>, T> {
    return new UpdateRequestBuilder<ChargesTolerances<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ChargesTolerances`.
   * @param dataAreaId Key property. See {@link ChargesTolerances.dataAreaId}.
   * @param chargesCode Key property. See {@link ChargesTolerances.chargesCode}.
   * @returns A request builder for creating requests that delete an entity of type `ChargesTolerances`.
   */
  delete(
    dataAreaId: string,
    chargesCode: string
  ): DeleteRequestBuilder<ChargesTolerances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ChargesTolerances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ChargesTolerances` by taking the entity as a parameter.
   */
  delete(
    entity: ChargesTolerances<T>
  ): DeleteRequestBuilder<ChargesTolerances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    chargesCode?: string
  ): DeleteRequestBuilder<ChargesTolerances<T>, T> {
    return new DeleteRequestBuilder<ChargesTolerances<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ChargesTolerances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ChargesCode: chargesCode!
          }
    );
  }
}

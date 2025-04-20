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
import { CustomsTariffCodes } from './CustomsTariffCodes';
import { DirectionIn } from './DirectionIn';

/**
 * Request builder class for operations supported on the {@link CustomsTariffCodes} entity.
 */
export class CustomsTariffCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CustomsTariffCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CustomsTariffCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CustomsTariffCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CustomsTariffCodes<T>, T> {
    return new GetAllRequestBuilder<CustomsTariffCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CustomsTariffCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomsTariffCodes`.
   */
  create(
    entity: CustomsTariffCodes<T>
  ): CreateRequestBuilder<CustomsTariffCodes<T>, T> {
    return new CreateRequestBuilder<CustomsTariffCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CustomsTariffCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CustomsTariffCodes.dataAreaId}.
   * @param tariffCode Key property. See {@link CustomsTariffCodes.tariffCode}.
   * @param direction Key property. See {@link CustomsTariffCodes.direction}.
   * @returns A request builder for creating requests to retrieve one `CustomsTariffCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tariffCode: DeserializedType<T, 'Edm.String'>,
    direction: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.Direction_IN'
    >
  ): GetByKeyRequestBuilder<CustomsTariffCodes<T>, T> {
    return new GetByKeyRequestBuilder<CustomsTariffCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TariffCode: tariffCode,
        Direction: direction
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `CustomsTariffCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomsTariffCodes`.
   */
  update(
    entity: CustomsTariffCodes<T>
  ): UpdateRequestBuilder<CustomsTariffCodes<T>, T> {
    return new UpdateRequestBuilder<CustomsTariffCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomsTariffCodes`.
   * @param dataAreaId Key property. See {@link CustomsTariffCodes.dataAreaId}.
   * @param tariffCode Key property. See {@link CustomsTariffCodes.tariffCode}.
   * @param direction Key property. See {@link CustomsTariffCodes.direction}.
   * @returns A request builder for creating requests that delete an entity of type `CustomsTariffCodes`.
   */
  delete(
    dataAreaId: string,
    tariffCode: string,
    direction: DirectionIn
  ): DeleteRequestBuilder<CustomsTariffCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CustomsTariffCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomsTariffCodes` by taking the entity as a parameter.
   */
  delete(
    entity: CustomsTariffCodes<T>
  ): DeleteRequestBuilder<CustomsTariffCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tariffCode?: string,
    direction?: DirectionIn
  ): DeleteRequestBuilder<CustomsTariffCodes<T>, T> {
    return new DeleteRequestBuilder<CustomsTariffCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CustomsTariffCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TariffCode: tariffCode!,
            Direction: direction!
          }
    );
  }
}

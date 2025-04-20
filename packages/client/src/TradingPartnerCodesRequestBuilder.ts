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
import { TradingPartnerCodes } from './TradingPartnerCodes';

/**
 * Request builder class for operations supported on the {@link TradingPartnerCodes} entity.
 */
export class TradingPartnerCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TradingPartnerCodes<T>, T> {
  /**
   * Returns a request builder for querying all `TradingPartnerCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TradingPartnerCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TradingPartnerCodes<T>, T> {
    return new GetAllRequestBuilder<TradingPartnerCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TradingPartnerCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TradingPartnerCodes`.
   */
  create(
    entity: TradingPartnerCodes<T>
  ): CreateRequestBuilder<TradingPartnerCodes<T>, T> {
    return new CreateRequestBuilder<TradingPartnerCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TradingPartnerCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TradingPartnerCodes.dataAreaId}.
   * @param code Key property. See {@link TradingPartnerCodes.code}.
   * @returns A request builder for creating requests to retrieve one `TradingPartnerCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TradingPartnerCodes<T>, T> {
    return new GetByKeyRequestBuilder<TradingPartnerCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        Code: code
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TradingPartnerCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TradingPartnerCodes`.
   */
  update(
    entity: TradingPartnerCodes<T>
  ): UpdateRequestBuilder<TradingPartnerCodes<T>, T> {
    return new UpdateRequestBuilder<TradingPartnerCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TradingPartnerCodes`.
   * @param dataAreaId Key property. See {@link TradingPartnerCodes.dataAreaId}.
   * @param code Key property. See {@link TradingPartnerCodes.code}.
   * @returns A request builder for creating requests that delete an entity of type `TradingPartnerCodes`.
   */
  delete(
    dataAreaId: string,
    code: string
  ): DeleteRequestBuilder<TradingPartnerCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TradingPartnerCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TradingPartnerCodes` by taking the entity as a parameter.
   */
  delete(
    entity: TradingPartnerCodes<T>
  ): DeleteRequestBuilder<TradingPartnerCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<TradingPartnerCodes<T>, T> {
    return new DeleteRequestBuilder<TradingPartnerCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TradingPartnerCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Code: code!
          }
    );
  }
}

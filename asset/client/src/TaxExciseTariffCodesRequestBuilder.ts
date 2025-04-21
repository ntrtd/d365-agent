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
import { TaxExciseTariffCodes } from './TaxExciseTariffCodes';

/**
 * Request builder class for operations supported on the {@link TaxExciseTariffCodes} entity.
 */
export class TaxExciseTariffCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxExciseTariffCodes<T>, T> {
  /**
   * Returns a request builder for querying all `TaxExciseTariffCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TaxExciseTariffCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TaxExciseTariffCodes<T>, T> {
    return new GetAllRequestBuilder<TaxExciseTariffCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxExciseTariffCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxExciseTariffCodes`.
   */
  create(
    entity: TaxExciseTariffCodes<T>
  ): CreateRequestBuilder<TaxExciseTariffCodes<T>, T> {
    return new CreateRequestBuilder<TaxExciseTariffCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxExciseTariffCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxExciseTariffCodes.dataAreaId}.
   * @param tariffCode Key property. See {@link TaxExciseTariffCodes.tariffCode}.
   * @returns A request builder for creating requests to retrieve one `TaxExciseTariffCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    tariffCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxExciseTariffCodes<T>, T> {
    return new GetByKeyRequestBuilder<TaxExciseTariffCodes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TariffCode: tariffCode
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxExciseTariffCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxExciseTariffCodes`.
   */
  update(
    entity: TaxExciseTariffCodes<T>
  ): UpdateRequestBuilder<TaxExciseTariffCodes<T>, T> {
    return new UpdateRequestBuilder<TaxExciseTariffCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxExciseTariffCodes`.
   * @param dataAreaId Key property. See {@link TaxExciseTariffCodes.dataAreaId}.
   * @param tariffCode Key property. See {@link TaxExciseTariffCodes.tariffCode}.
   * @returns A request builder for creating requests that delete an entity of type `TaxExciseTariffCodes`.
   */
  delete(
    dataAreaId: string,
    tariffCode: string
  ): DeleteRequestBuilder<TaxExciseTariffCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxExciseTariffCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxExciseTariffCodes` by taking the entity as a parameter.
   */
  delete(
    entity: TaxExciseTariffCodes<T>
  ): DeleteRequestBuilder<TaxExciseTariffCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    tariffCode?: string
  ): DeleteRequestBuilder<TaxExciseTariffCodes<T>, T> {
    return new DeleteRequestBuilder<TaxExciseTariffCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxExciseTariffCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TariffCode: tariffCode!
          }
    );
  }
}

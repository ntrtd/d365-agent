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
import { TaxExemptCodes } from './TaxExemptCodes';

/**
 * Request builder class for operations supported on the {@link TaxExemptCodes} entity.
 */
export class TaxExemptCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxExemptCodes<T>, T> {
  /**
   * Returns a request builder for querying all `TaxExemptCodes` entities.
   * @returns A request builder for creating requests to retrieve all `TaxExemptCodes` entities.
   */
  getAll(): GetAllRequestBuilder<TaxExemptCodes<T>, T> {
    return new GetAllRequestBuilder<TaxExemptCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxExemptCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxExemptCodes`.
   */
  create(
    entity: TaxExemptCodes<T>
  ): CreateRequestBuilder<TaxExemptCodes<T>, T> {
    return new CreateRequestBuilder<TaxExemptCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `TaxExemptCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link TaxExemptCodes.dataAreaId}.
   * @param taxExemptCode Key property. See {@link TaxExemptCodes.taxExemptCode}.
   * @param language Key property. See {@link TaxExemptCodes.language}.
   * @returns A request builder for creating requests to retrieve one `TaxExemptCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    taxExemptCode: DeserializedType<T, 'Edm.String'>,
    language: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxExemptCodes<T>, T> {
    return new GetByKeyRequestBuilder<TaxExemptCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      TaxExemptCode: taxExemptCode,
      Language: language
    });
  }

  /**
   * Returns a request builder for updating an entity of type `TaxExemptCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxExemptCodes`.
   */
  update(
    entity: TaxExemptCodes<T>
  ): UpdateRequestBuilder<TaxExemptCodes<T>, T> {
    return new UpdateRequestBuilder<TaxExemptCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxExemptCodes`.
   * @param dataAreaId Key property. See {@link TaxExemptCodes.dataAreaId}.
   * @param taxExemptCode Key property. See {@link TaxExemptCodes.taxExemptCode}.
   * @param language Key property. See {@link TaxExemptCodes.language}.
   * @returns A request builder for creating requests that delete an entity of type `TaxExemptCodes`.
   */
  delete(
    dataAreaId: string,
    taxExemptCode: string,
    language: string
  ): DeleteRequestBuilder<TaxExemptCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxExemptCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxExemptCodes` by taking the entity as a parameter.
   */
  delete(entity: TaxExemptCodes<T>): DeleteRequestBuilder<TaxExemptCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    taxExemptCode?: string,
    language?: string
  ): DeleteRequestBuilder<TaxExemptCodes<T>, T> {
    return new DeleteRequestBuilder<TaxExemptCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof TaxExemptCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TaxExemptCode: taxExemptCode!,
            Language: language!
          }
    );
  }
}

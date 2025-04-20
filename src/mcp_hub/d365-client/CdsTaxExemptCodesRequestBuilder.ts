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
import { CdsTaxExemptCodes } from './CdsTaxExemptCodes';

/**
 * Request builder class for operations supported on the {@link CdsTaxExemptCodes} entity.
 */
export class CdsTaxExemptCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CdsTaxExemptCodes<T>, T> {
  /**
   * Returns a request builder for querying all `CdsTaxExemptCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CdsTaxExemptCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CdsTaxExemptCodes<T>, T> {
    return new GetAllRequestBuilder<CdsTaxExemptCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CdsTaxExemptCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CdsTaxExemptCodes`.
   */
  create(
    entity: CdsTaxExemptCodes<T>
  ): CreateRequestBuilder<CdsTaxExemptCodes<T>, T> {
    return new CreateRequestBuilder<CdsTaxExemptCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `CdsTaxExemptCodes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CdsTaxExemptCodes.dataAreaId}.
   * @param name Key property. See {@link CdsTaxExemptCodes.name}.
   * @returns A request builder for creating requests to retrieve one `CdsTaxExemptCodes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    name: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CdsTaxExemptCodes<T>, T> {
    return new GetByKeyRequestBuilder<CdsTaxExemptCodes<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      Name: name
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CdsTaxExemptCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CdsTaxExemptCodes`.
   */
  update(
    entity: CdsTaxExemptCodes<T>
  ): UpdateRequestBuilder<CdsTaxExemptCodes<T>, T> {
    return new UpdateRequestBuilder<CdsTaxExemptCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `CdsTaxExemptCodes`.
   * @param dataAreaId Key property. See {@link CdsTaxExemptCodes.dataAreaId}.
   * @param name Key property. See {@link CdsTaxExemptCodes.name}.
   * @returns A request builder for creating requests that delete an entity of type `CdsTaxExemptCodes`.
   */
  delete(
    dataAreaId: string,
    name: string
  ): DeleteRequestBuilder<CdsTaxExemptCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CdsTaxExemptCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CdsTaxExemptCodes` by taking the entity as a parameter.
   */
  delete(
    entity: CdsTaxExemptCodes<T>
  ): DeleteRequestBuilder<CdsTaxExemptCodes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    name?: string
  ): DeleteRequestBuilder<CdsTaxExemptCodes<T>, T> {
    return new DeleteRequestBuilder<CdsTaxExemptCodes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof CdsTaxExemptCodes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Name: name!
          }
    );
  }
}

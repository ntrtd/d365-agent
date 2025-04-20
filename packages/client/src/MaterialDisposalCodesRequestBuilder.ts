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
import { MaterialDisposalCodes } from './MaterialDisposalCodes';

/**
 * Request builder class for operations supported on the {@link MaterialDisposalCodes} entity.
 */
export class MaterialDisposalCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<MaterialDisposalCodes<T>, T> {
  /**
   * Returns a request builder for querying all `MaterialDisposalCodes` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialDisposalCodes` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialDisposalCodes<T>, T> {
    return new GetAllRequestBuilder<MaterialDisposalCodes<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `MaterialDisposalCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `MaterialDisposalCodes`.
   */
  create(
    entity: MaterialDisposalCodes<T>
  ): CreateRequestBuilder<MaterialDisposalCodes<T>, T> {
    return new CreateRequestBuilder<MaterialDisposalCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `MaterialDisposalCodes` entity based on its keys.
   * @param materialDisposalCode Key property. See {@link MaterialDisposalCodes.materialDisposalCode}.
   * @returns A request builder for creating requests to retrieve one `MaterialDisposalCodes` entity based on its keys.
   */
  getByKey(
    materialDisposalCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<MaterialDisposalCodes<T>, T> {
    return new GetByKeyRequestBuilder<MaterialDisposalCodes<T>, T>(
      this.entityApi,
      { MaterialDisposalCode: materialDisposalCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `MaterialDisposalCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `MaterialDisposalCodes`.
   */
  update(
    entity: MaterialDisposalCodes<T>
  ): UpdateRequestBuilder<MaterialDisposalCodes<T>, T> {
    return new UpdateRequestBuilder<MaterialDisposalCodes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `MaterialDisposalCodes`.
   * @param materialDisposalCode Key property. See {@link MaterialDisposalCodes.materialDisposalCode}.
   * @returns A request builder for creating requests that delete an entity of type `MaterialDisposalCodes`.
   */
  delete(
    materialDisposalCode: string
  ): DeleteRequestBuilder<MaterialDisposalCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `MaterialDisposalCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `MaterialDisposalCodes` by taking the entity as a parameter.
   */
  delete(
    entity: MaterialDisposalCodes<T>
  ): DeleteRequestBuilder<MaterialDisposalCodes<T>, T>;
  delete(
    materialDisposalCodeOrEntity: any
  ): DeleteRequestBuilder<MaterialDisposalCodes<T>, T> {
    return new DeleteRequestBuilder<MaterialDisposalCodes<T>, T>(
      this.entityApi,
      materialDisposalCodeOrEntity instanceof MaterialDisposalCodes
        ? materialDisposalCodeOrEntity
        : { MaterialDisposalCode: materialDisposalCodeOrEntity! }
    );
  }
}

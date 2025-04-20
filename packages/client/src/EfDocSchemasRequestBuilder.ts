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
import { EfDocSchemas } from './EfDocSchemas';
import { EfDocSchemaTypeBr } from './EfDocSchemaTypeBr';
import { EFiscalDocVersionBr } from './EFiscalDocVersionBr';

/**
 * Request builder class for operations supported on the {@link EfDocSchemas} entity.
 */
export class EfDocSchemasRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<EfDocSchemas<T>, T> {
  /**
   * Returns a request builder for querying all `EfDocSchemas` entities.
   * @returns A request builder for creating requests to retrieve all `EfDocSchemas` entities.
   */
  getAll(): GetAllRequestBuilder<EfDocSchemas<T>, T> {
    return new GetAllRequestBuilder<EfDocSchemas<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `EfDocSchemas` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EfDocSchemas`.
   */
  create(entity: EfDocSchemas<T>): CreateRequestBuilder<EfDocSchemas<T>, T> {
    return new CreateRequestBuilder<EfDocSchemas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `EfDocSchemas` entity based on its keys.
   * @param schemaType Key property. See {@link EfDocSchemas.schemaType}.
   * @param version Key property. See {@link EfDocSchemas.version}.
   * @returns A request builder for creating requests to retrieve one `EfDocSchemas` entity based on its keys.
   */
  getByKey(
    schemaType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EFDocSchemaType_BR'
    >,
    version: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.EFiscalDocVersion_BR'
    >
  ): GetByKeyRequestBuilder<EfDocSchemas<T>, T> {
    return new GetByKeyRequestBuilder<EfDocSchemas<T>, T>(this.entityApi, {
      SchemaType: schemaType,
      Version: version
    });
  }

  /**
   * Returns a request builder for updating an entity of type `EfDocSchemas`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EfDocSchemas`.
   */
  update(entity: EfDocSchemas<T>): UpdateRequestBuilder<EfDocSchemas<T>, T> {
    return new UpdateRequestBuilder<EfDocSchemas<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EfDocSchemas`.
   * @param schemaType Key property. See {@link EfDocSchemas.schemaType}.
   * @param version Key property. See {@link EfDocSchemas.version}.
   * @returns A request builder for creating requests that delete an entity of type `EfDocSchemas`.
   */
  delete(
    schemaType: EfDocSchemaTypeBr,
    version: EFiscalDocVersionBr
  ): DeleteRequestBuilder<EfDocSchemas<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `EfDocSchemas`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EfDocSchemas` by taking the entity as a parameter.
   */
  delete(entity: EfDocSchemas<T>): DeleteRequestBuilder<EfDocSchemas<T>, T>;
  delete(
    schemaTypeOrEntity: any,
    version?: EFiscalDocVersionBr
  ): DeleteRequestBuilder<EfDocSchemas<T>, T> {
    return new DeleteRequestBuilder<EfDocSchemas<T>, T>(
      this.entityApi,
      schemaTypeOrEntity instanceof EfDocSchemas
        ? schemaTypeOrEntity
        : {
            SchemaType: schemaTypeOrEntity!,
            Version: version!
          }
    );
  }
}

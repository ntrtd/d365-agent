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
import { DiagnosticsValidationRules } from './DiagnosticsValidationRules';

/**
 * Request builder class for operations supported on the {@link DiagnosticsValidationRules} entity.
 */
export class DiagnosticsValidationRulesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DiagnosticsValidationRules<T>, T> {
  /**
   * Returns a request builder for querying all `DiagnosticsValidationRules` entities.
   * @returns A request builder for creating requests to retrieve all `DiagnosticsValidationRules` entities.
   */
  getAll(): GetAllRequestBuilder<DiagnosticsValidationRules<T>, T> {
    return new GetAllRequestBuilder<DiagnosticsValidationRules<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `DiagnosticsValidationRules` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DiagnosticsValidationRules`.
   */
  create(
    entity: DiagnosticsValidationRules<T>
  ): CreateRequestBuilder<DiagnosticsValidationRules<T>, T> {
    return new CreateRequestBuilder<DiagnosticsValidationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DiagnosticsValidationRules` entity based on its keys.
   * @param className Key property. See {@link DiagnosticsValidationRules.className}.
   * @returns A request builder for creating requests to retrieve one `DiagnosticsValidationRules` entity based on its keys.
   */
  getByKey(
    className: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DiagnosticsValidationRules<T>, T> {
    return new GetByKeyRequestBuilder<DiagnosticsValidationRules<T>, T>(
      this.entityApi,
      { ClassName: className }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DiagnosticsValidationRules`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DiagnosticsValidationRules`.
   */
  update(
    entity: DiagnosticsValidationRules<T>
  ): UpdateRequestBuilder<DiagnosticsValidationRules<T>, T> {
    return new UpdateRequestBuilder<DiagnosticsValidationRules<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DiagnosticsValidationRules`.
   * @param className Key property. See {@link DiagnosticsValidationRules.className}.
   * @returns A request builder for creating requests that delete an entity of type `DiagnosticsValidationRules`.
   */
  delete(
    className: string
  ): DeleteRequestBuilder<DiagnosticsValidationRules<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DiagnosticsValidationRules`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DiagnosticsValidationRules` by taking the entity as a parameter.
   */
  delete(
    entity: DiagnosticsValidationRules<T>
  ): DeleteRequestBuilder<DiagnosticsValidationRules<T>, T>;
  delete(
    classNameOrEntity: any
  ): DeleteRequestBuilder<DiagnosticsValidationRules<T>, T> {
    return new DeleteRequestBuilder<DiagnosticsValidationRules<T>, T>(
      this.entityApi,
      classNameOrEntity instanceof DiagnosticsValidationRules
        ? classNameOrEntity
        : { ClassName: classNameOrEntity! }
    );
  }
}

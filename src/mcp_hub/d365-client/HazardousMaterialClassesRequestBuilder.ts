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
import { HazardousMaterialClasses } from './HazardousMaterialClasses';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialClasses} entity.
 */
export class HazardousMaterialClassesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialClasses<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialClasses` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialClasses` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialClasses<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialClasses<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialClasses` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialClasses`.
   */
  create(
    entity: HazardousMaterialClasses<T>
  ): CreateRequestBuilder<HazardousMaterialClasses<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialClasses` entity based on its keys.
   * @param classCode Key property. See {@link HazardousMaterialClasses.classCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialClasses` entity based on its keys.
   */
  getByKey(
    classCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialClasses<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialClasses<T>, T>(
      this.entityApi,
      { ClassCode: classCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialClasses`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialClasses`.
   */
  update(
    entity: HazardousMaterialClasses<T>
  ): UpdateRequestBuilder<HazardousMaterialClasses<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialClasses<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialClasses`.
   * @param classCode Key property. See {@link HazardousMaterialClasses.classCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialClasses`.
   */
  delete(
    classCode: string
  ): DeleteRequestBuilder<HazardousMaterialClasses<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialClasses`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialClasses` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialClasses<T>
  ): DeleteRequestBuilder<HazardousMaterialClasses<T>, T>;
  delete(
    classCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialClasses<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialClasses<T>, T>(
      this.entityApi,
      classCodeOrEntity instanceof HazardousMaterialClasses
        ? classCodeOrEntity
        : { ClassCode: classCodeOrEntity! }
    );
  }
}

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
import { HazardousMaterialDivisions } from './HazardousMaterialDivisions';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialDivisions} entity.
 */
export class HazardousMaterialDivisionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialDivisions<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialDivisions` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialDivisions` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialDivisions<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialDivisions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialDivisions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialDivisions`.
   */
  create(
    entity: HazardousMaterialDivisions<T>
  ): CreateRequestBuilder<HazardousMaterialDivisions<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialDivisions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialDivisions` entity based on its keys.
   * @param divisionCode Key property. See {@link HazardousMaterialDivisions.divisionCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialDivisions` entity based on its keys.
   */
  getByKey(
    divisionCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialDivisions<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialDivisions<T>, T>(
      this.entityApi,
      { DivisionCode: divisionCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialDivisions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialDivisions`.
   */
  update(
    entity: HazardousMaterialDivisions<T>
  ): UpdateRequestBuilder<HazardousMaterialDivisions<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialDivisions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialDivisions`.
   * @param divisionCode Key property. See {@link HazardousMaterialDivisions.divisionCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialDivisions`.
   */
  delete(
    divisionCode: string
  ): DeleteRequestBuilder<HazardousMaterialDivisions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialDivisions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialDivisions` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialDivisions<T>
  ): DeleteRequestBuilder<HazardousMaterialDivisions<T>, T>;
  delete(
    divisionCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialDivisions<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialDivisions<T>, T>(
      this.entityApi,
      divisionCodeOrEntity instanceof HazardousMaterialDivisions
        ? divisionCodeOrEntity
        : { DivisionCode: divisionCodeOrEntity! }
    );
  }
}

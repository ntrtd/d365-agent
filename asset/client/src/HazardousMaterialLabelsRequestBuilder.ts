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
import { HazardousMaterialLabels } from './HazardousMaterialLabels';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialLabels} entity.
 */
export class HazardousMaterialLabelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialLabels<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialLabels` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialLabels` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialLabels<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialLabels<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialLabels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialLabels`.
   */
  create(
    entity: HazardousMaterialLabels<T>
  ): CreateRequestBuilder<HazardousMaterialLabels<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialLabels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialLabels` entity based on its keys.
   * @param labelCode Key property. See {@link HazardousMaterialLabels.labelCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialLabels` entity based on its keys.
   */
  getByKey(
    labelCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialLabels<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialLabels<T>, T>(
      this.entityApi,
      { LabelCode: labelCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialLabels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialLabels`.
   */
  update(
    entity: HazardousMaterialLabels<T>
  ): UpdateRequestBuilder<HazardousMaterialLabels<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialLabels<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialLabels`.
   * @param labelCode Key property. See {@link HazardousMaterialLabels.labelCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialLabels`.
   */
  delete(
    labelCode: string
  ): DeleteRequestBuilder<HazardousMaterialLabels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialLabels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialLabels` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialLabels<T>
  ): DeleteRequestBuilder<HazardousMaterialLabels<T>, T>;
  delete(
    labelCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialLabels<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialLabels<T>, T>(
      this.entityApi,
      labelCodeOrEntity instanceof HazardousMaterialLabels
        ? labelCodeOrEntity
        : { LabelCode: labelCodeOrEntity! }
    );
  }
}

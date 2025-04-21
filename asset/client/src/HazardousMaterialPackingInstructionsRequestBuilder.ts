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
import { HazardousMaterialPackingInstructions } from './HazardousMaterialPackingInstructions';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialPackingInstructions} entity.
 */
export class HazardousMaterialPackingInstructionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialPackingInstructions<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialPackingInstructions` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialPackingInstructions` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialPackingInstructions<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialPackingInstructions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialPackingInstructions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialPackingInstructions`.
   */
  create(
    entity: HazardousMaterialPackingInstructions<T>
  ): CreateRequestBuilder<HazardousMaterialPackingInstructions<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialPackingInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialPackingInstructions` entity based on its keys.
   * @param packInstCode Key property. See {@link HazardousMaterialPackingInstructions.packInstCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialPackingInstructions` entity based on its keys.
   */
  getByKey(
    packInstCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialPackingInstructions<T>, T> {
    return new GetByKeyRequestBuilder<
      HazardousMaterialPackingInstructions<T>,
      T
    >(this.entityApi, { PackInstCode: packInstCode });
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialPackingInstructions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialPackingInstructions`.
   */
  update(
    entity: HazardousMaterialPackingInstructions<T>
  ): UpdateRequestBuilder<HazardousMaterialPackingInstructions<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialPackingInstructions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialPackingInstructions`.
   * @param packInstCode Key property. See {@link HazardousMaterialPackingInstructions.packInstCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialPackingInstructions`.
   */
  delete(
    packInstCode: string
  ): DeleteRequestBuilder<HazardousMaterialPackingInstructions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialPackingInstructions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialPackingInstructions` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialPackingInstructions<T>
  ): DeleteRequestBuilder<HazardousMaterialPackingInstructions<T>, T>;
  delete(
    packInstCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialPackingInstructions<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialPackingInstructions<T>, T>(
      this.entityApi,
      packInstCodeOrEntity instanceof HazardousMaterialPackingInstructions
        ? packInstCodeOrEntity
        : { PackInstCode: packInstCodeOrEntity! }
    );
  }
}

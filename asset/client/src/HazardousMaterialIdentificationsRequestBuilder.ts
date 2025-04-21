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
import { HazardousMaterialIdentifications } from './HazardousMaterialIdentifications';

/**
 * Request builder class for operations supported on the {@link HazardousMaterialIdentifications} entity.
 */
export class HazardousMaterialIdentificationsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<HazardousMaterialIdentifications<T>, T> {
  /**
   * Returns a request builder for querying all `HazardousMaterialIdentifications` entities.
   * @returns A request builder for creating requests to retrieve all `HazardousMaterialIdentifications` entities.
   */
  getAll(): GetAllRequestBuilder<HazardousMaterialIdentifications<T>, T> {
    return new GetAllRequestBuilder<HazardousMaterialIdentifications<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `HazardousMaterialIdentifications` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `HazardousMaterialIdentifications`.
   */
  create(
    entity: HazardousMaterialIdentifications<T>
  ): CreateRequestBuilder<HazardousMaterialIdentifications<T>, T> {
    return new CreateRequestBuilder<HazardousMaterialIdentifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `HazardousMaterialIdentifications` entity based on its keys.
   * @param identificationCode Key property. See {@link HazardousMaterialIdentifications.identificationCode}.
   * @returns A request builder for creating requests to retrieve one `HazardousMaterialIdentifications` entity based on its keys.
   */
  getByKey(
    identificationCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<HazardousMaterialIdentifications<T>, T> {
    return new GetByKeyRequestBuilder<HazardousMaterialIdentifications<T>, T>(
      this.entityApi,
      { IdentificationCode: identificationCode }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `HazardousMaterialIdentifications`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `HazardousMaterialIdentifications`.
   */
  update(
    entity: HazardousMaterialIdentifications<T>
  ): UpdateRequestBuilder<HazardousMaterialIdentifications<T>, T> {
    return new UpdateRequestBuilder<HazardousMaterialIdentifications<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialIdentifications`.
   * @param identificationCode Key property. See {@link HazardousMaterialIdentifications.identificationCode}.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialIdentifications`.
   */
  delete(
    identificationCode: string
  ): DeleteRequestBuilder<HazardousMaterialIdentifications<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `HazardousMaterialIdentifications`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `HazardousMaterialIdentifications` by taking the entity as a parameter.
   */
  delete(
    entity: HazardousMaterialIdentifications<T>
  ): DeleteRequestBuilder<HazardousMaterialIdentifications<T>, T>;
  delete(
    identificationCodeOrEntity: any
  ): DeleteRequestBuilder<HazardousMaterialIdentifications<T>, T> {
    return new DeleteRequestBuilder<HazardousMaterialIdentifications<T>, T>(
      this.entityApi,
      identificationCodeOrEntity instanceof HazardousMaterialIdentifications
        ? identificationCodeOrEntity
        : { IdentificationCode: identificationCodeOrEntity! }
    );
  }
}

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
import { ReasonCodesForRestitutionComplement } from './ReasonCodesForRestitutionComplement';

/**
 * Request builder class for operations supported on the {@link ReasonCodesForRestitutionComplement} entity.
 */
export class ReasonCodesForRestitutionComplementRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ReasonCodesForRestitutionComplement<T>, T> {
  /**
   * Returns a request builder for querying all `ReasonCodesForRestitutionComplement` entities.
   * @returns A request builder for creating requests to retrieve all `ReasonCodesForRestitutionComplement` entities.
   */
  getAll(): GetAllRequestBuilder<ReasonCodesForRestitutionComplement<T>, T> {
    return new GetAllRequestBuilder<ReasonCodesForRestitutionComplement<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `ReasonCodesForRestitutionComplement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReasonCodesForRestitutionComplement`.
   */
  create(
    entity: ReasonCodesForRestitutionComplement<T>
  ): CreateRequestBuilder<ReasonCodesForRestitutionComplement<T>, T> {
    return new CreateRequestBuilder<ReasonCodesForRestitutionComplement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `ReasonCodesForRestitutionComplement` entity based on its keys.
   * @param dataAreaId Key property. See {@link ReasonCodesForRestitutionComplement.dataAreaId}.
   * @param reasonCode Key property. See {@link ReasonCodesForRestitutionComplement.reasonCode}.
   * @returns A request builder for creating requests to retrieve one `ReasonCodesForRestitutionComplement` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    reasonCode: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ReasonCodesForRestitutionComplement<T>, T> {
    return new GetByKeyRequestBuilder<
      ReasonCodesForRestitutionComplement<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      ReasonCode: reasonCode
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ReasonCodesForRestitutionComplement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReasonCodesForRestitutionComplement`.
   */
  update(
    entity: ReasonCodesForRestitutionComplement<T>
  ): UpdateRequestBuilder<ReasonCodesForRestitutionComplement<T>, T> {
    return new UpdateRequestBuilder<ReasonCodesForRestitutionComplement<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ReasonCodesForRestitutionComplement`.
   * @param dataAreaId Key property. See {@link ReasonCodesForRestitutionComplement.dataAreaId}.
   * @param reasonCode Key property. See {@link ReasonCodesForRestitutionComplement.reasonCode}.
   * @returns A request builder for creating requests that delete an entity of type `ReasonCodesForRestitutionComplement`.
   */
  delete(
    dataAreaId: string,
    reasonCode: string
  ): DeleteRequestBuilder<ReasonCodesForRestitutionComplement<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ReasonCodesForRestitutionComplement`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReasonCodesForRestitutionComplement` by taking the entity as a parameter.
   */
  delete(
    entity: ReasonCodesForRestitutionComplement<T>
  ): DeleteRequestBuilder<ReasonCodesForRestitutionComplement<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    reasonCode?: string
  ): DeleteRequestBuilder<ReasonCodesForRestitutionComplement<T>, T> {
    return new DeleteRequestBuilder<ReasonCodesForRestitutionComplement<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof ReasonCodesForRestitutionComplement
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            ReasonCode: reasonCode!
          }
    );
  }
}

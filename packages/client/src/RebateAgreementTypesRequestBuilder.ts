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
import { RebateAgreementTypes } from './RebateAgreementTypes';

/**
 * Request builder class for operations supported on the {@link RebateAgreementTypes} entity.
 */
export class RebateAgreementTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAgreementTypes<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAgreementTypes` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAgreementTypes` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAgreementTypes<T>, T> {
    return new GetAllRequestBuilder<RebateAgreementTypes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RebateAgreementTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAgreementTypes`.
   */
  create(
    entity: RebateAgreementTypes<T>
  ): CreateRequestBuilder<RebateAgreementTypes<T>, T> {
    return new CreateRequestBuilder<RebateAgreementTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `RebateAgreementTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link RebateAgreementTypes.dataAreaId}.
   * @param typeName Key property. See {@link RebateAgreementTypes.typeName}.
   * @returns A request builder for creating requests to retrieve one `RebateAgreementTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    typeName: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<RebateAgreementTypes<T>, T> {
    return new GetByKeyRequestBuilder<RebateAgreementTypes<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        TypeName: typeName
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAgreementTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAgreementTypes`.
   */
  update(
    entity: RebateAgreementTypes<T>
  ): UpdateRequestBuilder<RebateAgreementTypes<T>, T> {
    return new UpdateRequestBuilder<RebateAgreementTypes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAgreementTypes`.
   * @param dataAreaId Key property. See {@link RebateAgreementTypes.dataAreaId}.
   * @param typeName Key property. See {@link RebateAgreementTypes.typeName}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAgreementTypes`.
   */
  delete(
    dataAreaId: string,
    typeName: string
  ): DeleteRequestBuilder<RebateAgreementTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAgreementTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAgreementTypes` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAgreementTypes<T>
  ): DeleteRequestBuilder<RebateAgreementTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    typeName?: string
  ): DeleteRequestBuilder<RebateAgreementTypes<T>, T> {
    return new DeleteRequestBuilder<RebateAgreementTypes<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof RebateAgreementTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            TypeName: typeName!
          }
    );
  }
}

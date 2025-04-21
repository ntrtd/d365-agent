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
import { CreditManagementInsuranceCoverageTypes } from './CreditManagementInsuranceCoverageTypes';

/**
 * Request builder class for operations supported on the {@link CreditManagementInsuranceCoverageTypes} entity.
 */
export class CreditManagementInsuranceCoverageTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementInsuranceCoverageTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementInsuranceCoverageTypes` entities.
   */
  getAll(): GetAllRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T> {
    return new GetAllRequestBuilder<
      CreditManagementInsuranceCoverageTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditManagementInsuranceCoverageTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementInsuranceCoverageTypes`.
   */
  create(
    entity: CreditManagementInsuranceCoverageTypes<T>
  ): CreateRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T> {
    return new CreateRequestBuilder<
      CreditManagementInsuranceCoverageTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementInsuranceCoverageTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementInsuranceCoverageTypes.dataAreaId}.
   * @param type Key property. See {@link CreditManagementInsuranceCoverageTypes.type}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementInsuranceCoverageTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      CreditManagementInsuranceCoverageTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementInsuranceCoverageTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementInsuranceCoverageTypes`.
   */
  update(
    entity: CreditManagementInsuranceCoverageTypes<T>
  ): UpdateRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T> {
    return new UpdateRequestBuilder<
      CreditManagementInsuranceCoverageTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementInsuranceCoverageTypes`.
   * @param dataAreaId Key property. See {@link CreditManagementInsuranceCoverageTypes.dataAreaId}.
   * @param type Key property. See {@link CreditManagementInsuranceCoverageTypes.type}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementInsuranceCoverageTypes`.
   */
  delete(
    dataAreaId: string,
    type: string
  ): DeleteRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementInsuranceCoverageTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementInsuranceCoverageTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementInsuranceCoverageTypes<T>
  ): DeleteRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: string
  ): DeleteRequestBuilder<CreditManagementInsuranceCoverageTypes<T>, T> {
    return new DeleteRequestBuilder<
      CreditManagementInsuranceCoverageTypes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementInsuranceCoverageTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!
          }
    );
  }
}

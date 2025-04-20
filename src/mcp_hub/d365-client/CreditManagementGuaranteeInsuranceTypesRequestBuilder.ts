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
import { CreditManagementGuaranteeInsuranceTypes } from './CreditManagementGuaranteeInsuranceTypes';

/**
 * Request builder class for operations supported on the {@link CreditManagementGuaranteeInsuranceTypes} entity.
 */
export class CreditManagementGuaranteeInsuranceTypesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementGuaranteeInsuranceTypes` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementGuaranteeInsuranceTypes` entities.
   */
  getAll(): GetAllRequestBuilder<
    CreditManagementGuaranteeInsuranceTypes<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CreditManagementGuaranteeInsuranceTypes<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditManagementGuaranteeInsuranceTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementGuaranteeInsuranceTypes`.
   */
  create(
    entity: CreditManagementGuaranteeInsuranceTypes<T>
  ): CreateRequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T> {
    return new CreateRequestBuilder<
      CreditManagementGuaranteeInsuranceTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementGuaranteeInsuranceTypes` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementGuaranteeInsuranceTypes.dataAreaId}.
   * @param type Key property. See {@link CreditManagementGuaranteeInsuranceTypes.type}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementGuaranteeInsuranceTypes` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    type: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T> {
    return new GetByKeyRequestBuilder<
      CreditManagementGuaranteeInsuranceTypes<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      Type: type
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementGuaranteeInsuranceTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementGuaranteeInsuranceTypes`.
   */
  update(
    entity: CreditManagementGuaranteeInsuranceTypes<T>
  ): UpdateRequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T> {
    return new UpdateRequestBuilder<
      CreditManagementGuaranteeInsuranceTypes<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementGuaranteeInsuranceTypes`.
   * @param dataAreaId Key property. See {@link CreditManagementGuaranteeInsuranceTypes.dataAreaId}.
   * @param type Key property. See {@link CreditManagementGuaranteeInsuranceTypes.type}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementGuaranteeInsuranceTypes`.
   */
  delete(
    dataAreaId: string,
    type: string
  ): DeleteRequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementGuaranteeInsuranceTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementGuaranteeInsuranceTypes` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementGuaranteeInsuranceTypes<T>
  ): DeleteRequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    type?: string
  ): DeleteRequestBuilder<CreditManagementGuaranteeInsuranceTypes<T>, T> {
    return new DeleteRequestBuilder<
      CreditManagementGuaranteeInsuranceTypes<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementGuaranteeInsuranceTypes
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            Type: type!
          }
    );
  }
}

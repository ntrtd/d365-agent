/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
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
import { CreditManagementCustomerGuaranteeInsurances } from './CreditManagementCustomerGuaranteeInsurances';

/**
 * Request builder class for operations supported on the {@link CreditManagementCustomerGuaranteeInsurances} entity.
 */
export class CreditManagementCustomerGuaranteeInsurancesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T> {
  /**
   * Returns a request builder for querying all `CreditManagementCustomerGuaranteeInsurances` entities.
   * @returns A request builder for creating requests to retrieve all `CreditManagementCustomerGuaranteeInsurances` entities.
   */
  getAll(): GetAllRequestBuilder<
    CreditManagementCustomerGuaranteeInsurances<T>,
    T
  > {
    return new GetAllRequestBuilder<
      CreditManagementCustomerGuaranteeInsurances<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CreditManagementCustomerGuaranteeInsurances` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CreditManagementCustomerGuaranteeInsurances`.
   */
  create(
    entity: CreditManagementCustomerGuaranteeInsurances<T>
  ): CreateRequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T> {
    return new CreateRequestBuilder<
      CreditManagementCustomerGuaranteeInsurances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `CreditManagementCustomerGuaranteeInsurances` entity based on its keys.
   * @param dataAreaId Key property. See {@link CreditManagementCustomerGuaranteeInsurances.dataAreaId}.
   * @param custAccount Key property. See {@link CreditManagementCustomerGuaranteeInsurances.custAccount}.
   * @param guaranteeNumber Key property. See {@link CreditManagementCustomerGuaranteeInsurances.guaranteeNumber}.
   * @param validTo Key property. See {@link CreditManagementCustomerGuaranteeInsurances.validTo}.
   * @returns A request builder for creating requests to retrieve one `CreditManagementCustomerGuaranteeInsurances` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    custAccount: DeserializedType<T, 'Edm.String'>,
    guaranteeNumber: DeserializedType<T, 'Edm.String'>,
    validTo: DeserializedType<T, 'Edm.DateTimeOffset'>
  ): GetByKeyRequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T> {
    return new GetByKeyRequestBuilder<
      CreditManagementCustomerGuaranteeInsurances<T>,
      T
    >(this.entityApi, {
      dataAreaId: dataAreaId,
      CustAccount: custAccount,
      GuaranteeNumber: guaranteeNumber,
      ValidTo: validTo
    });
  }

  /**
   * Returns a request builder for updating an entity of type `CreditManagementCustomerGuaranteeInsurances`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CreditManagementCustomerGuaranteeInsurances`.
   */
  update(
    entity: CreditManagementCustomerGuaranteeInsurances<T>
  ): UpdateRequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T> {
    return new UpdateRequestBuilder<
      CreditManagementCustomerGuaranteeInsurances<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CreditManagementCustomerGuaranteeInsurances`.
   * @param dataAreaId Key property. See {@link CreditManagementCustomerGuaranteeInsurances.dataAreaId}.
   * @param custAccount Key property. See {@link CreditManagementCustomerGuaranteeInsurances.custAccount}.
   * @param guaranteeNumber Key property. See {@link CreditManagementCustomerGuaranteeInsurances.guaranteeNumber}.
   * @param validTo Key property. See {@link CreditManagementCustomerGuaranteeInsurances.validTo}.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementCustomerGuaranteeInsurances`.
   */
  delete(
    dataAreaId: string,
    custAccount: string,
    guaranteeNumber: string,
    validTo: Moment
  ): DeleteRequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CreditManagementCustomerGuaranteeInsurances`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CreditManagementCustomerGuaranteeInsurances` by taking the entity as a parameter.
   */
  delete(
    entity: CreditManagementCustomerGuaranteeInsurances<T>
  ): DeleteRequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    custAccount?: string,
    guaranteeNumber?: string,
    validTo?: Moment
  ): DeleteRequestBuilder<CreditManagementCustomerGuaranteeInsurances<T>, T> {
    return new DeleteRequestBuilder<
      CreditManagementCustomerGuaranteeInsurances<T>,
      T
    >(
      this.entityApi,
      dataAreaIdOrEntity instanceof CreditManagementCustomerGuaranteeInsurances
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            CustAccount: custAccount!,
            GuaranteeNumber: guaranteeNumber!,
            ValidTo: validTo!
          }
    );
  }
}

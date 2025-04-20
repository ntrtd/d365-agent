/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
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
import { RebateAndDeductionsAgreementDateSetups } from './RebateAndDeductionsAgreementDateSetups';

/**
 * Request builder class for operations supported on the {@link RebateAndDeductionsAgreementDateSetups} entity.
 */
export class RebateAndDeductionsAgreementDateSetupsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T> {
  /**
   * Returns a request builder for querying all `RebateAndDeductionsAgreementDateSetups` entities.
   * @returns A request builder for creating requests to retrieve all `RebateAndDeductionsAgreementDateSetups` entities.
   */
  getAll(): GetAllRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T> {
    return new GetAllRequestBuilder<
      RebateAndDeductionsAgreementDateSetups<T>,
      T
    >(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RebateAndDeductionsAgreementDateSetups` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RebateAndDeductionsAgreementDateSetups`.
   */
  create(
    entity: RebateAndDeductionsAgreementDateSetups<T>
  ): CreateRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T> {
    return new CreateRequestBuilder<
      RebateAndDeductionsAgreementDateSetups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `RebateAndDeductionsAgreementDateSetups` entity based on its keys.
   * @param agreementNumber Key property. See {@link RebateAndDeductionsAgreementDateSetups.agreementNumber}.
   * @param lineNumber Key property. See {@link RebateAndDeductionsAgreementDateSetups.lineNumber}.
   * @returns A request builder for creating requests to retrieve one `RebateAndDeductionsAgreementDateSetups` entity based on its keys.
   */
  getByKey(
    agreementNumber: DeserializedType<T, 'Edm.String'>,
    lineNumber: DeserializedType<T, 'Edm.Decimal'>
  ): GetByKeyRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T> {
    return new GetByKeyRequestBuilder<
      RebateAndDeductionsAgreementDateSetups<T>,
      T
    >(this.entityApi, {
      AgreementNumber: agreementNumber,
      LineNumber: lineNumber
    });
  }

  /**
   * Returns a request builder for updating an entity of type `RebateAndDeductionsAgreementDateSetups`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RebateAndDeductionsAgreementDateSetups`.
   */
  update(
    entity: RebateAndDeductionsAgreementDateSetups<T>
  ): UpdateRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T> {
    return new UpdateRequestBuilder<
      RebateAndDeductionsAgreementDateSetups<T>,
      T
    >(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDateSetups`.
   * @param agreementNumber Key property. See {@link RebateAndDeductionsAgreementDateSetups.agreementNumber}.
   * @param lineNumber Key property. See {@link RebateAndDeductionsAgreementDateSetups.lineNumber}.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDateSetups`.
   */
  delete(
    agreementNumber: string,
    lineNumber: BigNumber
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RebateAndDeductionsAgreementDateSetups`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RebateAndDeductionsAgreementDateSetups` by taking the entity as a parameter.
   */
  delete(
    entity: RebateAndDeductionsAgreementDateSetups<T>
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T>;
  delete(
    agreementNumberOrEntity: any,
    lineNumber?: BigNumber
  ): DeleteRequestBuilder<RebateAndDeductionsAgreementDateSetups<T>, T> {
    return new DeleteRequestBuilder<
      RebateAndDeductionsAgreementDateSetups<T>,
      T
    >(
      this.entityApi,
      agreementNumberOrEntity instanceof RebateAndDeductionsAgreementDateSetups
        ? agreementNumberOrEntity
        : {
            AgreementNumber: agreementNumberOrEntity!,
            LineNumber: lineNumber!
          }
    );
  }
}

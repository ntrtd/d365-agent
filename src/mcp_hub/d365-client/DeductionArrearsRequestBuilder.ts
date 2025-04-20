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
import { DeductionArrears } from './DeductionArrears';

/**
 * Request builder class for operations supported on the {@link DeductionArrears} entity.
 */
export class DeductionArrearsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeductionArrears<T>, T> {
  /**
   * Returns a request builder for querying all `DeductionArrears` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionArrears` entities.
   */
  getAll(): GetAllRequestBuilder<DeductionArrears<T>, T> {
    return new GetAllRequestBuilder<DeductionArrears<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeductionArrears` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductionArrears`.
   */
  create(
    entity: DeductionArrears<T>
  ): CreateRequestBuilder<DeductionArrears<T>, T> {
    return new CreateRequestBuilder<DeductionArrears<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `DeductionArrears` entity based on its keys.
   * @param dataAreaId Key property. See {@link DeductionArrears.dataAreaId}.
   * @param payStatementNumber Key property. See {@link DeductionArrears.payStatementNumber}.
   * @param benefitId Key property. See {@link DeductionArrears.benefitId}.
   * @returns A request builder for creating requests to retrieve one `DeductionArrears` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    payStatementNumber: DeserializedType<T, 'Edm.String'>,
    benefitId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeductionArrears<T>, T> {
    return new GetByKeyRequestBuilder<DeductionArrears<T>, T>(this.entityApi, {
      dataAreaId: dataAreaId,
      PayStatementNumber: payStatementNumber,
      BenefitId: benefitId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `DeductionArrears`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductionArrears`.
   */
  update(
    entity: DeductionArrears<T>
  ): UpdateRequestBuilder<DeductionArrears<T>, T> {
    return new UpdateRequestBuilder<DeductionArrears<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductionArrears`.
   * @param dataAreaId Key property. See {@link DeductionArrears.dataAreaId}.
   * @param payStatementNumber Key property. See {@link DeductionArrears.payStatementNumber}.
   * @param benefitId Key property. See {@link DeductionArrears.benefitId}.
   * @returns A request builder for creating requests that delete an entity of type `DeductionArrears`.
   */
  delete(
    dataAreaId: string,
    payStatementNumber: string,
    benefitId: string
  ): DeleteRequestBuilder<DeductionArrears<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeductionArrears`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductionArrears` by taking the entity as a parameter.
   */
  delete(
    entity: DeductionArrears<T>
  ): DeleteRequestBuilder<DeductionArrears<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    payStatementNumber?: string,
    benefitId?: string
  ): DeleteRequestBuilder<DeductionArrears<T>, T> {
    return new DeleteRequestBuilder<DeductionArrears<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof DeductionArrears
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            PayStatementNumber: payStatementNumber!,
            BenefitId: benefitId!
          }
    );
  }
}

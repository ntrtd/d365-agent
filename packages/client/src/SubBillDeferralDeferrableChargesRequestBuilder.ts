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
import { SubBillDeferralDeferrableCharges } from './SubBillDeferralDeferrableCharges';
import { SubBillDeferralTransactionType } from './SubBillDeferralTransactionType';
import { SubBillDeferralChargePostingCode } from './SubBillDeferralChargePostingCode';

/**
 * Request builder class for operations supported on the {@link SubBillDeferralDeferrableCharges} entity.
 */
export class SubBillDeferralDeferrableChargesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SubBillDeferralDeferrableCharges<T>, T> {
  /**
   * Returns a request builder for querying all `SubBillDeferralDeferrableCharges` entities.
   * @returns A request builder for creating requests to retrieve all `SubBillDeferralDeferrableCharges` entities.
   */
  getAll(): GetAllRequestBuilder<SubBillDeferralDeferrableCharges<T>, T> {
    return new GetAllRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SubBillDeferralDeferrableCharges` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SubBillDeferralDeferrableCharges`.
   */
  create(
    entity: SubBillDeferralDeferrableCharges<T>
  ): CreateRequestBuilder<SubBillDeferralDeferrableCharges<T>, T> {
    return new CreateRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SubBillDeferralDeferrableCharges` entity based on its keys.
   * @param dataAreaId Key property. See {@link SubBillDeferralDeferrableCharges.dataAreaId}.
   * @param subBillDeferralTransactionType Key property. See {@link SubBillDeferralDeferrableCharges.subBillDeferralTransactionType}.
   * @param subBillDeferralChargeCode Key property. See {@link SubBillDeferralDeferrableCharges.subBillDeferralChargeCode}.
   * @param subBillDeferralMarkupCodeRelation Key property. See {@link SubBillDeferralDeferrableCharges.subBillDeferralMarkupCodeRelation}.
   * @returns A request builder for creating requests to retrieve one `SubBillDeferralDeferrableCharges` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    subBillDeferralTransactionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubBillDeferralTransactionType'
    >,
    subBillDeferralChargeCode: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.SubBillDeferralChargePostingCode'
    >,
    subBillDeferralMarkupCodeRelation: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SubBillDeferralDeferrableCharges<T>, T> {
    return new GetByKeyRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        SubBillDeferralTransactionType: subBillDeferralTransactionType,
        SubBillDeferralChargeCode: subBillDeferralChargeCode,
        SubBillDeferralMarkupCodeRelation: subBillDeferralMarkupCodeRelation
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SubBillDeferralDeferrableCharges`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SubBillDeferralDeferrableCharges`.
   */
  update(
    entity: SubBillDeferralDeferrableCharges<T>
  ): UpdateRequestBuilder<SubBillDeferralDeferrableCharges<T>, T> {
    return new UpdateRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDeferrableCharges`.
   * @param dataAreaId Key property. See {@link SubBillDeferralDeferrableCharges.dataAreaId}.
   * @param subBillDeferralTransactionType Key property. See {@link SubBillDeferralDeferrableCharges.subBillDeferralTransactionType}.
   * @param subBillDeferralChargeCode Key property. See {@link SubBillDeferralDeferrableCharges.subBillDeferralChargeCode}.
   * @param subBillDeferralMarkupCodeRelation Key property. See {@link SubBillDeferralDeferrableCharges.subBillDeferralMarkupCodeRelation}.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDeferrableCharges`.
   */
  delete(
    dataAreaId: string,
    subBillDeferralTransactionType: SubBillDeferralTransactionType,
    subBillDeferralChargeCode: SubBillDeferralChargePostingCode,
    subBillDeferralMarkupCodeRelation: string
  ): DeleteRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SubBillDeferralDeferrableCharges`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SubBillDeferralDeferrableCharges` by taking the entity as a parameter.
   */
  delete(
    entity: SubBillDeferralDeferrableCharges<T>
  ): DeleteRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    subBillDeferralTransactionType?: SubBillDeferralTransactionType,
    subBillDeferralChargeCode?: SubBillDeferralChargePostingCode,
    subBillDeferralMarkupCodeRelation?: string
  ): DeleteRequestBuilder<SubBillDeferralDeferrableCharges<T>, T> {
    return new DeleteRequestBuilder<SubBillDeferralDeferrableCharges<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof SubBillDeferralDeferrableCharges
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            SubBillDeferralTransactionType: subBillDeferralTransactionType!,
            SubBillDeferralChargeCode: subBillDeferralChargeCode!,
            SubBillDeferralMarkupCodeRelation:
              subBillDeferralMarkupCodeRelation!
          }
    );
  }
}

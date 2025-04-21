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
import { VoucherTypeAccountRestrictions } from './VoucherTypeAccountRestrictions';
import { LedgerVoucherRestrictionTypeCn } from './LedgerVoucherRestrictionTypeCn';
import { LedgerJournalAcType } from './LedgerJournalAcType';

/**
 * Request builder class for operations supported on the {@link VoucherTypeAccountRestrictions} entity.
 */
export class VoucherTypeAccountRestrictionsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<VoucherTypeAccountRestrictions<T>, T> {
  /**
   * Returns a request builder for querying all `VoucherTypeAccountRestrictions` entities.
   * @returns A request builder for creating requests to retrieve all `VoucherTypeAccountRestrictions` entities.
   */
  getAll(): GetAllRequestBuilder<VoucherTypeAccountRestrictions<T>, T> {
    return new GetAllRequestBuilder<VoucherTypeAccountRestrictions<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `VoucherTypeAccountRestrictions` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `VoucherTypeAccountRestrictions`.
   */
  create(
    entity: VoucherTypeAccountRestrictions<T>
  ): CreateRequestBuilder<VoucherTypeAccountRestrictions<T>, T> {
    return new CreateRequestBuilder<VoucherTypeAccountRestrictions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `VoucherTypeAccountRestrictions` entity based on its keys.
   * @param dataAreaId Key property. See {@link VoucherTypeAccountRestrictions.dataAreaId}.
   * @param voucherType Key property. See {@link VoucherTypeAccountRestrictions.voucherType}.
   * @param restrictionType Key property. See {@link VoucherTypeAccountRestrictions.restrictionType}.
   * @param ledgerDimensionDisplayValue Key property. See {@link VoucherTypeAccountRestrictions.ledgerDimensionDisplayValue}.
   * @param accountType Key property. See {@link VoucherTypeAccountRestrictions.accountType}.
   * @returns A request builder for creating requests to retrieve one `VoucherTypeAccountRestrictions` entity based on its keys.
   */
  getByKey(
    dataAreaId: DeserializedType<T, 'Edm.String'>,
    voucherType: DeserializedType<T, 'Edm.String'>,
    restrictionType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerVoucherRestrictionType_CN'
    >,
    ledgerDimensionDisplayValue: DeserializedType<T, 'Edm.String'>,
    accountType: DeserializedType<
      T,
      'Microsoft.Dynamics.DataEntities.LedgerJournalACType'
    >
  ): GetByKeyRequestBuilder<VoucherTypeAccountRestrictions<T>, T> {
    return new GetByKeyRequestBuilder<VoucherTypeAccountRestrictions<T>, T>(
      this.entityApi,
      {
        dataAreaId: dataAreaId,
        VoucherType: voucherType,
        RestrictionType: restrictionType,
        LedgerDimensionDisplayValue: ledgerDimensionDisplayValue,
        AccountType: accountType
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `VoucherTypeAccountRestrictions`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `VoucherTypeAccountRestrictions`.
   */
  update(
    entity: VoucherTypeAccountRestrictions<T>
  ): UpdateRequestBuilder<VoucherTypeAccountRestrictions<T>, T> {
    return new UpdateRequestBuilder<VoucherTypeAccountRestrictions<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `VoucherTypeAccountRestrictions`.
   * @param dataAreaId Key property. See {@link VoucherTypeAccountRestrictions.dataAreaId}.
   * @param voucherType Key property. See {@link VoucherTypeAccountRestrictions.voucherType}.
   * @param restrictionType Key property. See {@link VoucherTypeAccountRestrictions.restrictionType}.
   * @param ledgerDimensionDisplayValue Key property. See {@link VoucherTypeAccountRestrictions.ledgerDimensionDisplayValue}.
   * @param accountType Key property. See {@link VoucherTypeAccountRestrictions.accountType}.
   * @returns A request builder for creating requests that delete an entity of type `VoucherTypeAccountRestrictions`.
   */
  delete(
    dataAreaId: string,
    voucherType: string,
    restrictionType: LedgerVoucherRestrictionTypeCn,
    ledgerDimensionDisplayValue: string,
    accountType: LedgerJournalAcType
  ): DeleteRequestBuilder<VoucherTypeAccountRestrictions<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `VoucherTypeAccountRestrictions`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `VoucherTypeAccountRestrictions` by taking the entity as a parameter.
   */
  delete(
    entity: VoucherTypeAccountRestrictions<T>
  ): DeleteRequestBuilder<VoucherTypeAccountRestrictions<T>, T>;
  delete(
    dataAreaIdOrEntity: any,
    voucherType?: string,
    restrictionType?: LedgerVoucherRestrictionTypeCn,
    ledgerDimensionDisplayValue?: string,
    accountType?: LedgerJournalAcType
  ): DeleteRequestBuilder<VoucherTypeAccountRestrictions<T>, T> {
    return new DeleteRequestBuilder<VoucherTypeAccountRestrictions<T>, T>(
      this.entityApi,
      dataAreaIdOrEntity instanceof VoucherTypeAccountRestrictions
        ? dataAreaIdOrEntity
        : {
            dataAreaId: dataAreaIdOrEntity!,
            VoucherType: voucherType!,
            RestrictionType: restrictionType!,
            LedgerDimensionDisplayValue: ledgerDimensionDisplayValue!,
            AccountType: accountType!
          }
    );
  }
}

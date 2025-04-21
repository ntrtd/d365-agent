/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LoyaltyCardRewardPointNonTransactionalActivityV2Entity } from './LoyaltyCardRewardPointNonTransactionalActivityV2Entity';
import { LoyaltyCardRewardPointNonTransactionalActivityV2EntityRequestBuilder } from './LoyaltyCardRewardPointNonTransactionalActivityV2EntityRequestBuilder';
import { RetailAffiliationsApi } from './RetailAffiliationsApi';
import { OperatingUnitsApi } from './OperatingUnitsApi';
import { RetailLoyaltyCardRewardPointNonTransactionalActivityStatus } from './RetailLoyaltyCardRewardPointNonTransactionalActivityStatus';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
      DeSerializersT
    >
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi<DeSerializersT> {
    return new LoyaltyCardRewardPointNonTransactionalActivityV2EntityApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailAffiliation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailAffiliationsApi<DeSerializersT>,
      OperatingUnitsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_AFFILIATION: new OneToOneLink(
        'RetailAffiliation',
        this,
        linkedApis[0]
      ),
      OPERATING_UNIT: new OneToOneLink('OperatingUnit', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = LoyaltyCardRewardPointNonTransactionalActivityV2Entity;

  requestBuilder(): LoyaltyCardRewardPointNonTransactionalActivityV2EntityRequestBuilder<DeSerializersT> {
    return new LoyaltyCardRewardPointNonTransactionalActivityV2EntityRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LoyaltyCardRewardPointNonTransactionalActivityV2Entity,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NON_TRANSACTIONAL_ACTIVITY_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CARD_NUMBER: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_AFFILIATION_NAME: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      RetailLoyaltyCardRewardPointNonTransactionalActivityStatus,
      true,
      true
    >;
    ENTRY_TIME: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    LOYALTY_OTHER_ACTIVITY_TYPE_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENTRY_DATE: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ERROR_LOGS: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RETAIL_AFFILIATION_ID: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    OM_OPERATING_UNIT_NUMBER: OrderableEdmTypeField<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailAffiliation} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_AFFILIATION: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
      DeSerializersT,
      RetailAffiliationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link operatingUnit} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OPERATING_UNIT: OneToOneLink<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializersT>,
      DeSerializersT,
      OperatingUnitsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      LoyaltyCardRewardPointNonTransactionalActivityV2Entity<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link nonTransactionalActivityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NON_TRANSACTIONAL_ACTIVITY_ID: fieldBuilder.buildEdmTypeField(
          'NonTransactionalActivityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link cardNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CARD_NUMBER: fieldBuilder.buildEdmTypeField(
          'CardNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailAffiliationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_AFFILIATION_NAME: fieldBuilder.buildEdmTypeField(
          'RetailAffiliationName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          RetailLoyaltyCardRewardPointNonTransactionalActivityStatus,
          true
        ),
        /**
         * Static representation of the {@link entryTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_TIME: fieldBuilder.buildEdmTypeField(
          'EntryTime',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link loyaltyOtherActivityTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOYALTY_OTHER_ACTIVITY_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'LoyaltyOtherActivityTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link entryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENTRY_DATE: fieldBuilder.buildEdmTypeField(
          'EntryDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link errorLogs} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ERROR_LOGS: fieldBuilder.buildEdmTypeField(
          'ErrorLogs',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link retailAffiliationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETAIL_AFFILIATION_ID: fieldBuilder.buildEdmTypeField(
          'RetailAffiliationId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          LoyaltyCardRewardPointNonTransactionalActivityV2Entity
        )
      };
    }

    return this._schema;
  }
}
